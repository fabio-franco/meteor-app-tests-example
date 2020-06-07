/* eslint object-shorthand: 0 */

module.exports = {
  'Fake Login': function (client) {
    const timeout = 1000;

    client
      // the location of our Meteor app
      .url('http://localhost:3000')

      // test app output
      .verify.elementPresent('#login')
      .verify.elementPresent('#profilePicture')
      .waitForElementNotPresent('#logout', timeout)
      .getAttribute('#profilePicture', 'src', function (result) {
        this.assert.equal(result.value, 'https://www.pinclipart.com/picdir/big/181-1814767_person-svg-png-icon-free-download-profile-icon.png');
      })

      // simulate user click to login
      .click('#login')
      .pause(500)

      .verify.containsText('h5', 'Jake')
      .verify.elementPresent('#logout')
      .waitForElementNotPresent('#login', timeout)
      .getAttribute('#profilePicture', 'src', function (result) {
        this.assert.equal(result.value, 'https://vignette.wikia.nocookie.net/horadeaventurabr/images/c/cd/Jake999.png/revision/latest?cb=20130407021850&path-prefix=pt-br');
      })

      // saving a copy of our viewport pixel grid
      .saveScreenshot('tests/nightwatch/screenshots/FakeLogin.png')
      .end();
  },
};
