import type MergeRequest from '../MergeRequest';

import type Rule from './Rule';
import type RuleResponse from './RuleResponse';

class RuleChain {
  private static on(rules: Rule[], mergeRequest: MergeRequest) {
    return rules.map(rule =>
      rule.apply(mergeRequest)
    );
  }

  private static onMultiple(rules: Rule[], mergeRequests: MergeRequest[]) {
    return mergeRequests.reduce((acc, mergeRequest) => {
      const responses = this.on(rules, mergeRequest);

      acc[mergeRequest.name] = responses;

      return acc;
    }, {} as Record<string, RuleResponse[]>);
  }

  static chain(...rules: Rule[]) {
    return {
      on: (mergeRequest: MergeRequest) => this.on(rules, mergeRequest),

      onMultiple: (mergeRequests: MergeRequest[]) => this.onMultiple(rules, mergeRequests)
    };
  }
}

export default RuleChain;
