/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'weather',
    environment: environment,
    baseURL: '/weather',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    openWeatherMap: {
      apiKey: 'd50a75befd108d8a3c588ae274a87219',
      units: 'metric'
    },

    forecast: {
      apiKey: 'd5127cacf75b588d4a3fd4a5923a825b',
      units: 'si'
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
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.openWeatherApi = {
      host: '.',
      namespace: 'api/ow'
    };
    ENV.forecastApi = {
      host: '.',
      namespace: 'api/fo'
    };
  } else {
    ENV.openWeatherApi = {
      host: 'http://api.openweathermap.org',
      namespace: 'data/2.5'
    };
    ENV.forecastApi = {
      host: 'https://api.forecast.io',
      namespace: 'forecast'
    };
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy = {
    'connect-src': "'self' http://api.openweathermap.org https://api.forecast.io",
    'style-src': "'self' 'unsafe-inline'",
    'script-src': "'self' https://api.forecast.io"
  };

  return ENV;
};
