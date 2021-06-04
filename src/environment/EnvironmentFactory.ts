import GitLabEnvironment from './gitlab/GitlabEnvironment';

class EnvironmentFactory {
  static create(envVariables: NodeJS.ProcessEnv) {
    if (this.isGitlabEnvironment(envVariables)) {
      return new GitLabEnvironment(envVariables);
    }
    throw new Error("Can't detect git provider");
  }

  private static isGitlabEnvironment(envVariables: NodeJS.ProcessEnv) {
    return !!envVariables['GITLAB_CI'];
  }
}

export default EnvironmentFactory;
