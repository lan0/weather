import { moduleForModel, test } from 'ember-qunit';

moduleForModel('forecast', 'Unit | Model | forecast', {
  // Specify the other units that are required for this test.
  needs: ['model:forecast-weather', 'model:forecast-hourly', 'model:forecast-daily']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
