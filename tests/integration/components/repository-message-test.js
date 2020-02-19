import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | repository-message', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<RepositoryMessage />`);

    assert.dom(this.element).hasText('× If a domain repository is not available for your kind of data, you may be able to use a general repository such as: Dryad Figshare Harvard Dataverse Mendeley Data Open Science Framework Zenodo You may also have an institutional repository or other local resources at your organization available to you. Contact your data librarian or computing facility for local data services.');
  });
});
