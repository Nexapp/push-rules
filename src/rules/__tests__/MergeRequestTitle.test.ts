import each from 'jest-each';

import MergeRequest from '../../MergeRequest';
import MergeRequestTitle from '../MergeRequestTitle';

describe('MergeRequestTitle', () => {
  const lettersOnlyRegexp = /\D/;
  const digitOnlyRegexp = /\d/;
  const passing = { 'code': 'PASS', message: undefined, 'rule': 'MergeRequestTitle' };
  const failing = { 'code': 'FAIL', 'message': expect.any(String), 'rule': 'MergeRequestTitle' };

  each([
    { name: 'only letters', regex: lettersOnlyRegexp, expected: passing },
    { name: 'only letters', regex: digitOnlyRegexp, expected: failing },
    { name: '123', regex: lettersOnlyRegexp, expected: failing },
    { name: '123', regex: digitOnlyRegexp, expected: passing },
    { name: '', regex: digitOnlyRegexp, expected: failing },
    { name: 'only letters', regex: undefined, expected: failing }
  ]).test('validate name "$name" for regex $regex', ({ name, regex, expected }) => {
    const mergeRequest = new MergeRequest({ name: name as string });
    const rule = new MergeRequestTitle({ regex: regex as RegExp });

    expect(rule.apply(mergeRequest)).toEqual(expected);
  });
});
