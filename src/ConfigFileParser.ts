import fs from 'fs';

import Configuration from './Configuration';
import MergeRequestTitle from './rules/MergeRequestTitle';

class ConfigFileParser {
  static parse(configPath: string) {
    if (!fs.existsSync(configPath)) {
      throw new Error('No configuration file found at project root. Add a .push-rulesrc file.');
    }

    const configFile = fs.readFileSync(configPath).toString();
    const config = JSON.parse(configFile);

    return new Configuration([
      new MergeRequestTitle({ regex: new RegExp(config.rules?.title?.regExp) })
    ]);
  }
}

export default ConfigFileParser;
