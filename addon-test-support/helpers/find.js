import convertTestSelector from './convert-test-selector';
import { find as nativeFind } from 'ember-native-dom-helpers';

export default function find(selector, context) {
  selector = convertTestSelector(selector);

  if (context) {
    context = convertTestSelector(context);
    return Ember.$(nativeFind(selector, context));
  }

  return Ember.$(nativeFind(selector))
}
