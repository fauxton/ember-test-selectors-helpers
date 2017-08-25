import Ember from 'ember';

const { isNone } = Ember;

export default function () {
  Ember.Test.unregisterHelper('find');
  Ember.Test.registerHelper('find', (app, selector) => {
    if (/^[\w-]+$/.test(selector)) {
      selector = `[data-test-${selector}]`;
    }

    return Ember.$(selector);
  });
}
