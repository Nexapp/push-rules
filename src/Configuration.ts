import type Rule from './rules/Rule';

class Configuration {
  rules: Rule[];

  constructor(rules: Rule[]) {
    this.rules = rules;
  }
}

export default Configuration;
