import Ember from 'ember';
import { inject as service } from '@ember/service';
import ENV from 'dackel/config/environment';
import fetch from 'fetch';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';
import customNotFoundTemplate from '../templates/search-templates/not-found';

export default Ember.Component.extend(RouteMixin, {
  router: service(),

  hasInput: Ember.computed.notEmpty('query'),
  helpText: null,
  filter: 'all',
  query: null,
  sort: null,
  subject: null,
  open: false,
  pid: false,
  term : null,
  customNotFoundTemplate: customNotFoundTemplate,
  collapsed: true,
  notCollapsed: Ember.computed.not('collapsed'),

  didReceiveAttrs() {
    this._super(...arguments);

    this.set('query', this.get('model').get('otherParams.query'));
    this.set('sort', this.get('model').get('otherParams.sort'));
  },

  suggest(query, syncResults, asyncResults) {
    let url = ENV.API_URL + '/repositories/suggest?query=' + query;
    fetch(url).then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
          asyncResults(data);
        });
      } else {
        Ember.Logger.assert(false, response)
      }
    }).catch(function(error) {
      Ember.Logger.assert(false, error)
    });
  },

  search() {
    let params = Object.assign(this.get('model').get('otherParams'), { query: this.get('query'), subject: this.get('subject'), open: this.get('open'), pid: this.get('pid'), sort: this.get('sort'), page: null, perPage: null });

    params.paramMapping = { page: "page[number]",
                            perPage: "page[size]",
                            total_pages: "total-pages" };

    this.get('router').transitionTo('index', { queryParams: params });
  },

  actions: {
    doProject(project) {
      this.set('project', project);
    },
    doSearch(query) {
      if (query) {
        this.set('sort', 'relevance');
      } else if (this.get('sort') === 'relevance') {
        this.set('sort', null);
      }

      this.set('query', query);
      this.search();
    },
    toggle() {
      this.set('collapsed', !this.get('collapsed'));
    },
    doSubject() {
      this.set('subject', '34');
      this.search();
    },
    doOpen(open) {
      this.set('open', open);
      this.search();
    },
    doPid(pid) {
      this.set('pid', pid);
      this.search();
    },
    clear() {
      this.set('query', '');
      this.search();
    },
    selectFilter(filter) {
      this.set('filter', filter);
      if (filter === 'agu-fair') {
        this.set('subject', '34');
        this.set('open', true);
        this.set('pid', true);
      } else {
        this.set('subject', null);
        this.set('open', false);
        this.set('pid', false);
      }
      this.search();
    },
    sort(sort) {
      this.set('sort', sort);
      this.search();
    },
    toggle() {
      this.set('collapsed', !this.get('collapsed'));
    }
  },

  didInsertElement() {
    this.set('modelName', 'Repository');
    this.set('formats', { name: 'Sort by Name', relevance: 'Sort by Relevance', '-created': 'Sort by Date Registered' });
  }
});
