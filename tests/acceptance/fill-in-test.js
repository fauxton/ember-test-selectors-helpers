import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | fill in');

test('fillIn works as expected', async function(assert) {
  await visit('/');
  await fillIn('little-input', 'foobar');

  assert.equal(find('little-input').val(), 'foobar');
});
