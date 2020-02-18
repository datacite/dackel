import Ember from 'ember';
import { assign } from '@ember/polyfills';

export default Ember.Route.extend({
  perPage: 50,
  collapsed: false,
  
  model(params) {
    params = assign(params, {
      page: {
        number: params.page,
        size: params.size,
      },
    });

    return this.store.query('re3data', params);
  },

  actions: {
    queryParamsDidChange() {
      this.refresh();
    }
  }
});