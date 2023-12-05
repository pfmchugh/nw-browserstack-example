let retries = 0;
// this test will only pass if it's run with suiteRetries > 1
module.exports = {
  async demoTest(client) {
    client.url(client.globals.launch_url);
    client.globals.retryAssertionTimeout = 3000;
    if (retries < 1) {
      retries += 1;
      client.assert.equal(0, 1);
    } else {
      client.assert.equal(1, 1);
    }
  },
};
