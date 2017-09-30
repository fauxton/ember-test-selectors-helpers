import Ember from 'ember';
import convertTestSelector from './convert-test-selector';
import customFind from './find';
import customFillIn from './fill-in';
import customClick from './click';
import {
  keyEvent as nativeKeyEvent,
  triggerEvent as nativeTriggerEvent,
} from 'ember-native-dom-helpers';

var helperOverrides = function () {
  Ember.Test.unregisterHelper('find');
  Ember.Test.registerHelper('find', function (app, selector, context) {
    return customFind(selector, context);
  });

  Ember.Test.unregisterHelper('fillIn');
  Ember.Test.registerHelper('fillIn', function (app, selector, text) {
    return customFillIn(selector, text);
  });

  Ember.Test.unregisterHelper('click');
  Ember.Test.registerHelper('click', function (app, selector) {
    return customClick(selector);
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
