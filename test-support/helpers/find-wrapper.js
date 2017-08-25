import Ember from 'ember';

export function convertSelector(selector) {
  if (/^[\w-]+$/.test(selector)) {
    selector = `[data-test-${selector}]`;
  }
  return selector;
}


export default function () {
  Ember.Test.unregisterHelper('find');
  Ember.Test.registerHelper('find', (app, selector, context) => {
    selector = convertSelector(selector);

    if (context) {
      context = convertSelector(context);
      return Ember.$(selector, context);
    }

    return Ember.$(selector);
  });
}
