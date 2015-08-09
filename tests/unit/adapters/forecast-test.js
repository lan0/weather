import { moduleFor, test } from 'ember-qunit';
import Config from 'weather/config/environment';

moduleFor('adapter:forecast', 'Unit | Adapter | forecast', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it builds the correct forecast.io url', function(assert) {
  const adapter = this.subject();
  const apiKey = Config.forecast.apiKey;
  const units = Config.forecast.units;

  const url = adapter.buildURL();

  assert.equal(url, './api/fo/' + apiKey + '?units=' + units, 'api key and units get attached');
});