import app from '../package.json';

import type GitClient from './api/GitClient';
import GitClientFactory from './api/GitClientFactory';
import ConfigFileParser from './ConfigFileParser';
import type Configuration from './Configuration';
import type Environment from './environment/Environment';
import EnvironmentFactory from './environment/EnvironmentFactory';
import type MergeRequest from './MergeRequest';
import MergeRequestResponsesList from './MergeRequestResponsesList';
import Printer from './Printer';
import RuleChain from './rules/RuleChain';

const CONFIG_PATH = '.push-rulesrc';

const run = async () => {
  Printer.log('=========================');
  Printer.special('\tPUSH-RULES');
  Printer.info('\t  v' + app.version);
  Printer.log('=========================');

  const envVariables = process.env;
  let configuration: Configuration;
  let environment: Environment;
  let client: GitClient;

  Printer.info('Preparing configuration...');

  try {
    configuration = ConfigFileParser.parse(CONFIG_PATH);
    environment = EnvironmentFactory.create(envVariables);
    client = GitClientFactory.create(environment);
  } catch (e) {
    const error = e as Error;
    Printer.error(error.message);
    process.exit(1);
  }

  if (!environment.isCI()) {
    Printer.warn("Does not seem to run on a CI. Can't check any rules");
    process.exit(0);
  }

  Printer.info('Fetching merge requests information...');
  let mergeRequests: MergeRequest[];
  try {
    mergeRequests = await client.getMergeRequests();
  } catch (e) {
    const error = e as Error;
    Printer.error(error.message);
    process.exit(1);
  }

  if (mergeRequests.length === 0) {
    Printer.warn('No merge requests found for branch');
    process.exit(0);
  }

  const responsePerMergeRequest = RuleChain
    .chain(...configuration.rules)
    .onMultiple(mergeRequests);

  const mergeRequestResponsesList = new MergeRequestResponsesList(responsePerMergeRequest);

  Printer.log(mergeRequestResponsesList.describe());

  if (mergeRequestResponsesList.hasFailedMergeRequest()) {
    process.exit(1);
  }

  process.exit(0);
};

run();
