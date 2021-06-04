import type Environment from '../../environment/Environment';
import GitLabEnvironment from '../../environment/gitlab/GitlabEnvironment';
import GitClientFactory from '../GitClientFactory';
import GitlabClient from '../gitlab/GitlabClient';

describe('GitClientFactory', () => {
  it('can create a gitlab client', () => {
    const gitlabEnvironment = new GitLabEnvironment({ CI: 'true' });

    const result = GitClientFactory.create(gitlabEnvironment);
    expect(result).toBeInstanceOf(GitlabClient);
  });

  describe('given unknown provider environment', () => {
    it('should throw', () => {
      const unknownEnvironment = {} as Environment;

      expect(() => {
        GitClientFactory.create(unknownEnvironment);
      }).toThrow();
    });
  });
});
