import Environment from '../Environment';

class GitLabEnvironment extends Environment {
  CI: boolean;
  CI_MERGE_REQUEST_IID: string | undefined;
  API_URL: string | undefined;
  CI_PROJECT_ID: string | undefined;
  ACCESS_TOKEN: string | undefined;
  BRANCH_NAME: string | undefined;

  constructor(envVariable: NodeJS.ProcessEnv) {
    super();
    this.CI = envVariable.CI === 'true';
    this.CI_MERGE_REQUEST_IID = envVariable.CI_MERGE_REQUEST_IID;
    this.API_URL = envVariable.CI_API_V4_URL;
    this.CI_PROJECT_ID = envVariable.CI_PROJECT_ID;
    this.ACCESS_TOKEN = envVariable.CI_ACCESS_TOKEN;
    this.BRANCH_NAME = envVariable.CI_COMMIT_BRANCH;
  }

  isCI() {
    return this.CI;
  }
}

export default GitLabEnvironment;
