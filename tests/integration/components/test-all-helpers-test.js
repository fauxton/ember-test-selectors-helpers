import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-test-selectors-helpers/helpers/find';

moduleForComponent('test-all-helpers', 'Integration | Component | test all helpers', {
  integration: true
});

test('can use helpers in integration tests', async function(assert) {
  await this.render(hbs`{{test-all-helpers}}`);

  assert.ok(find('foo-bar'), 'find helper works');
});
