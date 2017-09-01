import Ember from 'ember';

export function convertSelector(selector) {
  const regex = /^[\w-]+$/;
  if (regex.test(selector)) {
    selector = `[data-test-${selector}]`;
  }
  return selector;
}

var helperOverrides = function () {
  Ember.Test.unregisterHelper('find');
  Ember.Test.registerHelper('find', function (app, selector, context) {
    selector = convertSelector(selector);

    if (context) {
      context = convertSelector(context);
      return Ember.$(selector, context);
    }

    return Ember.$(selector);
  });
}

export default helperOverrides;
