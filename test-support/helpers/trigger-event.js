import convertTestSelector from './convert-test-selector';
import { triggerEvent as nativeTriggerEvent } from 'ember-native-dom-helpers';

export default function triggerEvent(selector, contextOrType, typeOrOptions, possibleOptions) {
  selector = convertTestSelector(selector);
  return nativeTriggerEvent(selector, contextOrType, typeOrOptions, possibleOptions);
}
