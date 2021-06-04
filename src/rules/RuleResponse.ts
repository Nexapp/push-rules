import colors from 'colors';

export enum ResponseCode {
  PASS = 'PASS',
  FAIL = 'FAIL'
}

interface RuleResponseAttributes {
  code: ResponseCode;
  rule: string;
  message?: string;
}

class RuleResponse {
  code: ResponseCode;
  rule: string;
  message: string | undefined;

  constructor({ code, rule, message }: RuleResponseAttributes) {
    this.code = code;
    this.rule = rule;
    this.message = message;
  }

  static pass(rule: string) {
    return new RuleResponse({ rule, code: ResponseCode.PASS });
  }

  static fail(rule: string, message: string) {
    return new RuleResponse({ rule, code: ResponseCode.FAIL, message });
  }

  hasFail() {
    return this.code === ResponseCode.FAIL;
  }

  describe() {
    return [
      colors.bold(this.rule),
      '-',
      this.hasFail() ? colors.bgRed.white(this.code) : colors.bgGreen.white(this.code),
      this.hasFail() && this.message ? colors.red(this.message) : null
    ].filter(Boolean).join(' ');
  }
}

export default RuleResponse;
