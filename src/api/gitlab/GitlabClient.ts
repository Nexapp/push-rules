import fetch from 'node-fetch';

import type GitLabEnvironment from '../../environment/gitlab/GitlabEnvironment';
import MergeRequest from '../../MergeRequest';
import GitClient from '../GitClient';

class GitlabClient extends GitClient {
  environment: GitLabEnvironment;
  headers: Record<string, Record<string, string | undefined>>;

  constructor(environment: GitLabEnvironment) {
    super();
    this.environment = environment;
    this.headers = {
      headers: { 'PRIVATE-TOKEN': this.environment.ACCESS_TOKEN }
    };
  }

  async getMergeRequests() {
    if (!this.environment.ACCESS_TOKEN) {
      throw new Error('No access token');
    }

    const URL = `${this.environment.API_URL}/projects/${this.environment.CI_PROJECT_ID}/merge_requests`;

    if (this.environment.CI_MERGE_REQUEST_IID) {
      const rawResponse = await fetch(
        `${URL}/${this.environment.CI_MERGE_REQUEST_IID}`,
        this.headers
      );

      const response = (await rawResponse.json()) as { title: string };

      return [new MergeRequest({ name: response.title })];
    } else if (this.environment.BRANCH_NAME) {
      const rawResponse = await fetch(
        `${URL}?source_branch=${this.environment.BRANCH_NAME}`,
        this.headers
      );

      const responses = (await rawResponse.json()) as { title: string }[];

      return responses.map(response => new MergeRequest({ name: response.title }));
    }

    return [];
  }
}

export default GitlabClient;
