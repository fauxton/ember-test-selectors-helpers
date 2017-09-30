import convertTestSelector from './convert-test-selector';
import { fillIn as nativeFillIn } from 'ember-native-dom-helpers';

export default function fillIn(selector, text) {
  selector = convertTestSelector(selector);
  return nativeFillIn(selector, text);
}
