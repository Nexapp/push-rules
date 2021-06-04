import type MergeRequest from '../MergeRequest';

abstract class GitClient {
  abstract getMergeRequests(): Promise<MergeRequest[]>;
}

export default GitClient;
