import EnvironmentFactory from '../EnvironmentFactory';
import GitLabEnvironment from '../gitlab/GitlabEnvironment';

describe('EnvironmentFactory', () => {
  it('can create a gitlab environment', () => {
    const env: NodeJS.ProcessEnv = {
      'GITLAB_CI': 'true'
    };

    const result = EnvironmentFactory.create(env);
    expect(result).toBeInstanceOf(GitLabEnvironment);
  });

  describe('when no git provider is detected', () => {
    it('should throw', () => {
      const env: NodeJS.ProcessEnv = { };

      expect(() => {
        EnvironmentFactory.create(env);
      }).toThrow();
    });
  });
});
