/* global describe, it, Meteor */

import assert from 'assert';

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
/**
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
//import { Random } from 'meteor/random';
import { chai, assert } from 'meteor/practicalmeteor:chai';
import sinon from 'sinon';
import { fakeLogin } from '../../client/fakeLogin/fakeLogin';

describe('Post Service', function () {
  it('Should be able to create a post', function () {
      //const postId = fakeLogin.login({title: 'Hello'})
      //assert.isString(postId);
      //fakeLogin.login();
      sinon.spy(Meteor, 'login')
      Meteor.call('login');
      //assert.ok
  })
})
*/
