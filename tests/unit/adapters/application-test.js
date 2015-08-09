import { moduleFor, test } from 'ember-qunit';
import Config from 'weather/config/environment';

moduleFor('adapter:application', 'Unit | Adapter | application', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it builds the url according to config params', function(assert) {
  const adapter = this.subject();
  const apiKey = Config.openWeatherMap.apiKey;
  const units = Config.openWeatherMap.units;

  const url = adapter.buildURL();

  assert.equal(url, './api/ow?' +
    'APPID=' + apiKey + '&' +
    'units=' + units + '', 'url parameters get attached');
});
