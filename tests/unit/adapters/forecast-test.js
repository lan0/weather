import { moduleFor, test } from 'ember-qunit';
import Config from 'weather/config/environment';

moduleFor('adapter:forecast', 'Unit | Adapter | forecast', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it builds the correct forecast.io url', function(assert) {
  const adapter = this.subject();
  const units = Config.forecast.units;

  const url = adapter.buildURL();

  assert.equal(url, './api/fo?units=' + units, 'units get attached');
});

// Replace this with your real tests.
test('it generates the correct id for a record', function(assert) {
  const adapter = this.subject();
  const model = {
    latitude: 16.37,
    longitude: -48.20
  };

  const id = adapter.generateIdForRecord(null, model);

  assert.equal(id, model.latitude + ',' + model.longitude, 'api key and units get attached');
});

test('it generates the correct url for a single record', function(assert) {
  const adapter = this.subject();
  const apiKey = Config.forecast.apiKey;
  const units = Config.forecast.units;
  const id = '13.7,14.2';
  const url = adapter.buildURL('forecast', id, [], 'find');

  assert.equal(url, './api/fo/' + apiKey + '/' + encodeURIComponent(id) + '?units=' + units, 'url parameters get attached');
});
