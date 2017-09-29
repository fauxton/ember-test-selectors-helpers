import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | find');

test('find helper is overridden', async function(assert) {
  await visit('/');

  assert.equal(find('outer-context').length, 1, 'Finds element with data-test-* attr by default');
  assert.equal(find('non-existent-test-selector').length, 0, 'Does not find non-existent selector');
  assert.equal(find('.my-outside-class').length, 1, 'Does not convert test selector when class');
  assert.equal(find('.my-inside-class', 'outer-context').length, 1, 'Handles context conversion with arbitrary selector');
  assert.equal(find('my-test-selector', 'outer-context').length, 1, 'Handles context conversion with nested data-test-attrs');
});

test('click helper works as expected', async function(assert) {
  await visit('/');
  await click('one-link');

  assert.equal(currentURL(), '/one', 'click succeeded using data-test-attr');
});

test('findWithAssert works as expected', async function(assert) {
  await visit('/');

  assert.ok(findWithAssert('outer-context'), 'findWithAssert finds element w/data-test-attr');
});
