import MergeRequest from '../../MergeRequest';
import RuleChain from '../RuleChain';
import RuleResponse from '../RuleResponse';

jest.mock('../Rule');

describe('RulesChain', () => {
  const mergeRequest = new MergeRequest({ name: 'name' });
  const otherMergeRequest = new MergeRequest({ name: 'other name' });
  const titleRule = {
    ruleName: 'TitleRule',
    apply: () => RuleResponse.fail(
      'TitleRule',
      'Merge request name does not respect regexp'
    )
  };
  const dummyRule = {
    ruleName: 'DummyRule',
    apply: () => RuleResponse.pass(
      'DummyRule'
    )
  };

  it('can run for one merge request', () => {
    const result = RuleChain.chain(titleRule).on(mergeRequest);

    const expected = [
      {
        code: 'FAIL',
        rule: 'TitleRule',
        message: 'Merge request name does not respect regexp'
      }
    ];
    expect(result).toEqual(expected);
  });

  it('can run for multiple merge requests', () => {
    const result = RuleChain.chain(titleRule).onMultiple([mergeRequest, otherMergeRequest]);

    const expected = {
      [mergeRequest.name]: [
        {
          code: 'FAIL',
          rule: 'TitleRule',
          message: 'Merge request name does not respect regexp'

        }
      ],
      [otherMergeRequest.name]: [
        {
          code: 'FAIL',
          rule: 'TitleRule',
          message: 'Merge request name does not respect regexp'
        }
      ]
    };
    expect(result).toEqual(expected);
  });

  it('can run multiple rules for one merge request', () => {
    const result = RuleChain.chain(titleRule, dummyRule).on(mergeRequest);

    const expected = [
      {
        code: 'FAIL',
        rule: 'TitleRule',
        message: 'Merge request name does not respect regexp'
      },
      {
        code: 'PASS',
        rule: 'DummyRule',
        message: undefined
      }
    ];
    expect(result).toEqual(expected);
  });

  it('can run multiple rules for multiple merge requests', () => {
    const result = RuleChain.chain(titleRule, dummyRule).onMultiple([mergeRequest, otherMergeRequest]);

    const expected = {
      [mergeRequest.name]: [
        {
          code: 'FAIL',
          rule: 'TitleRule',
          message: 'Merge request name does not respect regexp'
        },
        {
          code: 'PASS',
          rule: 'DummyRule',
          message: undefined
        }
      ],
      [otherMergeRequest.name]: [
        {
          code: 'FAIL',
          rule: 'TitleRule',
          message: 'Merge request name does not respect regexp'
        },
        {
          code: 'PASS',
          rule: 'DummyRule',
          message: undefined
        }
      ]
    };
    expect(result).toEqual(expected);
  });
});
