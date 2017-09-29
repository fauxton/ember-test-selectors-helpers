import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | click');

test('click helper works as expected', async function(assert) {
  await visit('/');
  await click('one-link');

  assert.equal(currentURL(), '/one', 'click succeeded using data-test-attr');
});

