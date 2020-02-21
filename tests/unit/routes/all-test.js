import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | all', function(hooks) {
  setupTest(hooks);

  test('index exists', function(assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route);
  });

  test('search exists', function(assert) {
    let route = this.owner.lookup('route:search');
    assert.ok(route);
  });
});
