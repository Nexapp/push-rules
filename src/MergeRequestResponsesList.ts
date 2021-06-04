import colors from 'colors';

import type RuleResponse from './rules/RuleResponse';

const FAIL_ICON = '❌';
const PASS_ICON = '✔️';

class MergeRequestResponsesList {
  responseByMergeRequest: Record<string, RuleResponse[]>;
  constructor(responseByMergeRequest: Record<string, RuleResponse[]>) {
    this.responseByMergeRequest = responseByMergeRequest;
  }

  describe() {
    return Object.entries(this.responseByMergeRequest).reduce((acc, [MergeRequestTitle, responses]) => {
      const hasFailedRules = Object.values(responses).some(response => response.hasFail());

      const mergeRequestDescription = (hasFailedRules ? FAIL_ICON : PASS_ICON) + ' ' + colors.cyan(MergeRequestTitle);

      const responseDescriptions = Object.values(responses).map(response =>
        response.describe()
      );

      return [...acc, mergeRequestDescription, ...responseDescriptions];
    }, [] as string[]).join('\n');
  }

  hasFailedMergeRequest() {
    return Object
      .values(this.responseByMergeRequest)
      .some(responses =>
        Object
          .values(responses)
          .some(response => response.hasFail())
      );
  }
}

export default MergeRequestResponsesList;
