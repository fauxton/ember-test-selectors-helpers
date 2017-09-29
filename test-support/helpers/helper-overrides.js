import Ember from 'ember';
import {
  find as nativeFind,
  fillIn as nativeFillIn,
} from 'ember-native-dom-helpers';

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
      return Ember.$(nativeFind(selector, context));
    }

    return Ember.$(nativeFind(selector))
  });

  Ember.Test.unregisterHelper('fillIn');
  Ember.Test.registerHelper('fillIn', function (app, selector, text) {
    selector = convertSelector(selector);
    return nativeFillIn(selector, text);
  });
}

export default helperOverrides;
