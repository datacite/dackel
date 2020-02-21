import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | subject-label', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('tag', { text: '23 climate' });

    await render(hbs`<SubjectLabel @tag={{tag}} />`);

    assert.dom(this.element).hasText('climate');
  });
});
