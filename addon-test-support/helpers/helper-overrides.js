import Ember from 'ember';
import convertTestSelector from './convert-test-selector';
import { find } from './find';
import { fillIn } from './fill-in';
import { click } from './click';
import { keyEvent } from './key-event';
import { triggerEvent } from './trigger-event';

var helperOverrides = function () {
  Ember.Test.unregisterHelper('find');
  Ember.Test.registerHelper('find', function (app, selector, context) {
    return find(selector, context);
  });

  Ember.Test.unregisterHelper('fillIn');
  Ember.Test.registerHelper('fillIn', function (app, selector, text) {
    return fillIn(selector, text);
  });

  Ember.Test.unregisterHelper('click');
  Ember.Test.registerHelper('click', function (app, selector) {
    return click(selector);
  });

  Ember.Test.unregisterHelper('keyEvent');
  Ember.Test.registerHelper('keyEvent', function (app, selector, type, keyCode) {
    return keyEvent(selector, type, keyCode);
  });

  Ember.Test.unregisterHelper('triggerEvent');
  Ember.Test.registerHelper('triggerEvent', function (app, selector, contextOrType, typeOrOptions, possibleOptions) {
    return triggerEvent(selector, contextOrType, typeOrOptions, possibleOptions);
  });
}

export default helperOverrides;
