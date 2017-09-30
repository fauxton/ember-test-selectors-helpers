import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('one');
  this.route('key-event');
  this.route('trigger-event');
});

export default Router;
