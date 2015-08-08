import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('city', 'Unit | Model | city', {
  // Specify the other units that are required for this test.
  needs: []
});

test('timeOfCalculation gets computed correctly', function(assert) {
  const model = this.subject();
  const time = 1439034608;

  Ember.run(() => {
    model.set('dt', time);
  });

  assert.equal(model.get('timeOfCalculation').getTime(), time * 1000, 'date gets correctly built');
});
