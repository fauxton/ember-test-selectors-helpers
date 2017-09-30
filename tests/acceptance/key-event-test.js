import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | key event');

test('keyEvent works as expected', async function(assert) {
  await visit('/key-event');

  await keyEvent('press-enter-key', 'keypress', 13);

  assert.ok(find('key-was-pressed'), 'previously hidden div is shown');
});
