import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('city', 'Unit | Model | city', {
  // Specify the other units that are required for this test.
  needs: []
});

test('timeOfCalculation gets computed correctly', function(assert) {
  var model = this.subject();

  Ember.run(() => {
    model.set('dt', 1439034608);
  });

  assert.equal(model.get('timeOfCalculation'), 'Sat Aug 08 2015 13:50:08 GMT+0200 (CEST)', 'date gets correctly built');
});
