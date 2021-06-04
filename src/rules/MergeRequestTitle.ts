import type MergeRequest from '../MergeRequest';

import Rule from './Rule';
import RuleResponse from './RuleResponse';

interface MergeRequestTitleConfiguration {
  regex: RegExp;
}

class MergeRequestTitle extends Rule {
  ruleName = 'MergeRequestTitle';
  configuration: MergeRequestTitleConfiguration;

  constructor(configuration: MergeRequestTitleConfiguration) {
    super();
    this.configuration = configuration;
  }

  apply(mergeRequest: MergeRequest): RuleResponse {
    const { regex } = this.configuration;

    if (regex && regex.test(mergeRequest.name) && !!this.ruleName) {
      return RuleResponse.pass(this.ruleName);
    }

    return RuleResponse.fail(
      this.ruleName,
      'Merge request name does not respect regexp'
    );
  }
}

export default MergeRequestTitle;
