/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dackel',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    bugsnag: {
      apiKey: process.env.BUGSNAG_API_KEY,
      notifyReleaseStages: ['production', 'staging'],
      releaseStage: process.env.BUGSNAG_RELEASE_STAGE
    },
    emberTracker: {
			analyticsSettings: {
				trackingId: process.env.TRACKING_ID || null,
			},
    },
    flashMessageDefaults: {
      timeout: 5000,
      extendedTimeout: 0,
      priority: 200,
      sticky: true,
      showProgress: true,
      preventDuplicates: true
    },

    SITE_TITLE: process.env.SITE_TITLE || "Repository Finder",
    NAVMENU_TITLE: process.env.NAVMENU_TITLE,
    APP_URL: process.env.APP_URL || "https://api.test.datacite.org",
    CDN_URL: process.env.CDN_URL || "https://assets.test.datacite.org",
    SUBJECT_FILTER: "34",

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
