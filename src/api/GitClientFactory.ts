import type Environment from '../environment/Environment';
import GitLabEnvironment from '../environment/gitlab/GitlabEnvironment';

import GitlabClient from './gitlab/GitlabClient';

class GitClientFactory {
  static create(environment: Environment) {
    if (this.isGitlab(environment)) {
      return new GitlabClient(environment);
    }
    throw new Error("Can't detect git provider");
  }

  private static isGitlab(environment: Environment): environment is GitLabEnvironment {
    return environment instanceof GitLabEnvironment;
  }
}

export default GitClientFactory;
