import Ember from 'ember';
import convertTestSelector from './convert-test-selector';
import {
  find as nativeFind,
  fillIn as nativeFillIn,
  click as nativeClick,
  keyEvent as nativeKeyEvent,
  triggerEvent as nativeTriggerEvent,
} from 'ember-native-dom-helpers';

var helperOverrides = function () {
  Ember.Test.unregisterHelper('find');
  Ember.Test.registerHelper('find', function (app, selector, context) {
    selector = convertTestSelector(selector);

    if (context) {
      context = convertTestSelector(context);
      return Ember.$(nativeFind(selector, context));
    }

    return Ember.$(nativeFind(selector))
  });

  Ember.Test.unregisterHelper('fillIn');
  Ember.Test.registerHelper('fillIn', function (app, selector, text) {
    selector = convertTestSelector(selector);
    return nativeFillIn(selector, text);
  });

  Ember.Test.unregisterHelper('click');
  Ember.Test.registerHelper('click', function (app, selector) {
    selector = convertTestSelector(selector);
    return nativeClick(selector);
  });

  Ember.Test.unregisterHelper('keyEvent');
  Ember.Test.registerHelper('keyEvent', function (app, selector, type, keyCode) {
    selector = convertTestSelector(selector);
    return nativeKeyEvent(selector, type, keyCode);
  });

  Ember.Test.unregisterHelper('triggerEvent');
  Ember.Test.registerHelper('triggerEvent', function (app, selector, contextOrType, typeOrOptions, possibleOptions) {
    selector = convertTestSelector(selector);
    return nativeTriggerEvent(selector, contextOrType, typeOrOptions, possibleOptions);
  });
}

export default helperOverrides;
