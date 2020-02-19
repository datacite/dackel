import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupFactoryGuy, make } from 'ember-data-factory-guy';

module('Integration | Component | model-search', function(hooks) {
  setupRenderingTest(hooks);
  setupFactoryGuy(hooks);

  test('it renders', async function(assert) {
    this.set('model', make('re3data'));

    await render(hbs`<ModelSearch @model={{model}} />`);

    assert.dom(this.element).hasText('Search re3data for a repository to upload your data See the repositories in re3data that meet the criteria of the Enabling FAIR Data Project See the repositories in re3data that meet the criteria of the FAIRsFAIR Project The repository provides open access to its data Research data hosted by the repository are accessible without restrictions. The repository uses persistent identifiers Persistent identifiers such as DOIs uniquely identifier datasets, enable the linking to publications, and help with discovery. Search');
  });
});
