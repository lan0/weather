import { moduleFor, test } from 'ember-qunit';
import Config from 'weather/config/environment';

moduleFor('adapter:city', 'Unit | Adapter | city', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it transforms the find id into a query parameter', function(assert) {
  const adapter = this.subject();
  const apiKey = Config.openWeatherMap.apiKey;
  const units = Config.openWeatherMap.units;

  const url = adapter.buildURL('city', 'gotham', [], 'find');

  assert.equal(url, 'http://api.openweathermap.org/data/2.5/weather?' +
    'q=gotham&' +
    'APPID=' + apiKey + '&' +
    'units=' + units, 'url parameters get attached');
});
