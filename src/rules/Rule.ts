import type MergeRequest from '../MergeRequest';

import type RuleResponse from './RuleResponse';

abstract class Rule {
  abstract apply(mergeRequest: MergeRequest): RuleResponse;
}

export default Rule;
