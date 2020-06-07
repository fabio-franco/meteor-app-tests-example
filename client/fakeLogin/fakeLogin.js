import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.fakeLogin.onCreated(function helloOnCreated() {
  this.name = new ReactiveVar('');
  this.picture = new ReactiveVar('https://www.pinclipart.com/picdir/big/181-1814767_person-svg-png-icon-free-download-profile-icon.png');
});

Template.fakeLogin.helpers({
  name() {
    return Template.instance().name.get();
  },
  picture() {
    return Template.instance().picture.get();
  },
});

Template.fakeLogin.events({
  'click #login'(event, templateInstance) {
    templateInstance.name.set('Jake');
    templateInstance.picture.set('https://vignette.wikia.nocookie.net/horadeaventurabr/images/c/cd/Jake999.png/revision/latest?cb=20130407021850&path-prefix=pt-br');
  },
  'click #logout'(event, templateInstance) {
    templateInstance.name.set('');
    templateInstance.picture.set('https://www.pinclipart.com/picdir/big/181-1814767_person-svg-png-icon-free-download-profile-icon.png');
  },
});
