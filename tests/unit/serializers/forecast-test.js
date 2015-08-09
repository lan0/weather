import { moduleForModel, test } from 'ember-qunit';
import startApp from '../../helpers/start-app';

let store, serializer;

moduleForModel('forecast', 'Unit | Serializer | forecast', {
  // Specify the other units that are required for this test.
  needs: ['serializer:forecast'],

  setup() {
    const app = startApp();
    store = app.__container__.lookup('store:main');
    serializer = app.__container__.lookup('serializer:forecast');
  }
});

test('it formats correctly', function(assert) {
  const response = {
    latitude: 13,
    longitude: 46
  };

  const json = serializer.transformPayload(response);

  assert.equal(json.forecast.id, '13,46', 'it builds the id correctly');
});
