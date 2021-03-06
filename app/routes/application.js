import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Ember.Route.extend({
  intl: service(),

  beforeModel() {
    // if you lazily load translations, here is also where you would load them via `intl.addTranslations`
    this.get('intl').setLocale(['en-us']);
  }
});