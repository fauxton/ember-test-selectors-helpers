import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, fillIn, click, keyEvent, triggerEvent } from 'ember-test-selectors-helpers';

moduleForComponent('test-all-helpers', 'Integration | Component | test all helpers', {
  integration: true
});

test('can use helpers in integration tests', async function(assert) {
  await this.render(hbs`{{test-all-helpers}}`);

  assert.ok(find('foo-bar').length, 'find helper works');

  await fillIn('some-input', 'some text');

  assert.equal(find('some-input').val(), 'some text');

  await click('a-button');
  await keyEvent('key-event-target', 'keypress', 13);
  await triggerEvent('blur-target', 'blur');

  assert.ok(find('blur-target').hasClass('blurred'));
});
