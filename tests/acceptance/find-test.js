import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import registerTestHelpersManually from '../../tests/helpers/find-wrapper';

registerTestHelpersManually();

moduleForAcceptance('Acceptance | find');

test('wraps find helper correctly ', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('a-test-selector').length, 1, 'Uses custom find logic instead of default helper');
    assert.equal(find('.with-a-class').length, 1, 'Finds classes exactly as default helper would');
    assert.equal(find('').length, 0, 'Does nothing when passed nothing');
  });
});
