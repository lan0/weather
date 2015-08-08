import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'weather/tests/helpers/start-app';

module('Acceptance | city search', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('the search works', function(assert) {
  visit('/');

  andThen(function() {
    fillIn('.search-input', 'vienna');
    click('.search-button');
  });

  andThen(function() {
    assert.equal(currentURL(), '/city/vienna', 'redirect on search');
    assert.equal(find('.city-name').text().trim(), 'Vienna', 'city is correct');
    assert.equal(find('.city-temp').text().trim(), '31.97', 'temperature is correct');
  });
});

test('the search works with country', function(assert) {
  visit('/');

  andThen(function() {
    fillIn('.search-input', 'vienna,at');
    click('.search-button');
  });

  andThen(function() {
    assert.equal(currentURL(), '/city/vienna,at', 'redirect on search');
    assert.equal(find('.city-name').text().trim(), 'Vienna', 'city is correct');
  });
});
