/* global describe, it, Meteor, before */
import assert from 'assert';
// import { Template } from 'meteor/templating';

describe('meteor-app-tests', function () {
  it('package.json has correct name', async function () {
    const { name } = await import('../../package.json');
    assert.strictEqual(name, 'meteor-app-tests');
  });

  if (Meteor.isClient) {
    it('client is not server', function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it('server is not client', function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});

describe('Cases', function() {
  before(function() {
    // resetDatabase();
    /** Template.hello.onCreated(function() {
      this.counter = new ReactiveVar(0);
    }); */
  });

  it('click on Click Me button', function () {
    /** Template.hello.onCreated(function() {
      this.counter = new ReactiveVar(0);
    }); */
  });
});
