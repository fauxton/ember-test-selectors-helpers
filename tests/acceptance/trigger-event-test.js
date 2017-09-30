import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | trigger event');

test('triggerEvent works as expected', async function(assert) {
  await visit('/trigger-event');

  await click('blur-target');

  assert.notOk(find('blur-target').hasClass('blur'), 'blur class not yet set');

  await triggerEvent('blur-target', 'blur');

  assert.ok(find('blur-target').hasClass('blur'), 'blur class applied');
});
