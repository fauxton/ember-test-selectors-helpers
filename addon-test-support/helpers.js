import { registerHelper, unregisterHelper } from '@ember/test';

export function convertSelector(selector) {
  const regex = /^[\w-]+$/;
  if (regex.test(selector)) {
    selector = `[data-test-${selector}]`;
  }
  return selector;
}

export function customFind(selector, context) {
  selector = convertSelector(selector);

  if (context) {
    context = convertSelector(context);
    return Ember.$(selector, context);
  }

  return Ember.$(selector);
}

export default function () {
  unregisterHelper('find');
  registerHelper('find', function (app, selector, context) {
    return customFind(selector, context);
  });
}
