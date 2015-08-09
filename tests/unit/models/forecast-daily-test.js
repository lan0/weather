import { moduleForModel, test } from 'ember-qunit';

moduleForModel('forecast-daily', 'Unit | Model | forecast daily', {
  // Specify the other units that are required for this test.
  needs: ['model:forecast-weather']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
