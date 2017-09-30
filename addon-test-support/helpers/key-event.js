import convertTestSelector from './convert-test-selector';
import { keyEvent as nativeKeyEvent } from 'ember-native-dom-helpers';

export function keyEvent(selector, type, keyCode) {
  selector = convertTestSelector(selector);
  return nativeKeyEvent(selector, type, keyCode);
}
