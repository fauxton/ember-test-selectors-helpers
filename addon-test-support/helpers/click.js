import convertTestSelector from './convert-test-selector';
import { click as nativeClick } from 'ember-native-dom-helpers';

export default function click(selector, text) {
  selector = convertTestSelector(selector);
  return nativeClick(selector, text);
}
