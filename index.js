#!/usr/bin/env node
const fs = require("fs");
const {CI, CI_MERGE_REQUEST_TITLE} = process.env;

if(!CI || !CI_MERGE_REQUEST_TITLE) {
  process.exit(0);
}

const configFile=fs.readFileSync(".push-rulesrc")
let config = JSON.parse(configFile);

const titleRegExp = new RegExp(config.mergeRequestTitleRegExp)

if(!titleRegExp.test(CI_MERGE_REQUEST_TITLE)){
  console.log('\x1b[31m%s\x1b[0m',"Merge request name does not match regex");
  process.exitCode = 1;
}
