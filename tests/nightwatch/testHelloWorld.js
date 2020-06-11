/* eslint object-shorthand: 0 */

module.exports = {
  'Hello World': function (client) {
    client
      // the location of our Meteor app
      .url('http://localhost:3000')

      // the size of the viewport
      .resizeWindow(1024, 768)

      // test app output
      .verify.elementPresent('h1')
      .verify.containsText('h1', 'Welcome to Meteor!')
      .verify.containsText('p', 'You have pressed the button 0 times')
      .verify.elementPresent('#counter-button')

      // simulate user input
      .click('#counter-button').pause(5000)

      // test app output again, to make sure input worked
      .verify.containsText('p', 'button 1 times')

      // saving a copy of our viewport pixel grid
      .saveScreenshot('tests/nightwatch/screenshots/helloWorld.png')
      .end();
  },
};
