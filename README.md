Want push rules but don't want to pay for premium? Push rules is perfect for you!

## Config file

`.push-rulesrc`
```json
{
  "rules": {
    "title": {
      "regExp": "^((feat|chore|fix|refactor|rework)\\(JIRA-.+\\): .*|((chore|fix)(\\(.+\\))?): .*)"
    }
  }
}
```

You will need a CI variable named : "CI_ACCESS_TOKEN" wich is a personal access token of a member of the project with read permissions
