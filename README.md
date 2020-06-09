# meteor-app-tests
 
The purpose of this project is illustrate some of the technologies discussed on FED presentation.

To use this project, make sure you have meteor installed: https://www.meteor.com/install
After that, just clone the repository and run: `npm install` and `npm run start`.

Enjoy!

![alt text](https://github.com/fabio-franco/meteor-app-tests-example/blob/master/assets/app-screenshot.png)

# Technologies discussed

## Meteor
It is the main technology used on this project. It is a react technology that allows back and front end development.
Site: https://www.meteor.com/

Just call `npm run start` to see meteor in action.

## Bootstrap
Great framework that allows fast, robust, and responsive web development.
Site: https://getbootstrap.com/

## Lint
Site: https://eslint.org/
It is already configured for this project. Just call `npm run lint` or `npm run test` to see lint in action.

## Mocha
Site: https://mochajs.org/
It is already set for this project. Just call `npm run test` to see mocha executing unit-tests.

## Chai
Site: https://www.chaijs.com/
It's not configured yet for this project.

## SinonJS
Site: https://sinonjs.org/
It's not configured yet for this project.

## Git Hooks

Site: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks
Site: https://pre-commit.com/#new-hooks

For this project, git hook is already configured. You just need to call a `git commit` and the hook will call pre-commit setup.

## Nightwatch
Nightwatch.js is an integrated, easy to use End-to-End testing solution for web applications and websites, written in Node.js.
Site: https://nightwatchjs.org/

### How to use for this project: 

Nightwatch need to be downloaded and configured according your env: https://nightwatchjs.org/gettingstarted/installation/

After config nightwatch, make sure project is running over http://localhost:3000 before call nightwatch to execute.

To execute test for all files: nightwatch --config tests/nightwatch/nightwatch.json 
To execute test for a single file: nightwatch --config tests/nightwatch/nightwatch.json --test tests/nightwatch/testFakeLogin.js 

## Vue
Site: https://vuejs.org/

## Nuxt
Site: https://nuxtjs.org/
