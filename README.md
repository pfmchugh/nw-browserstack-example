# nw-browserstack-example
Requires node v16 or greater to be install and npm.
1. Run `npm install` to install the necessary node modules
2. Copy `sample.env` -> `.env` and fill out Browserstack user and key
3. Run `npx nightwatch -e browserstack --suiteRetries 1` to replicate the issue.
