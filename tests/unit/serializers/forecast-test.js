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
    id: 1
  };

  const jsonApi = serializer.normalizeSingleResponse(store, store.modelFor('forecast'), response, 1);

  assert.deepEqual(jsonApi.data.attributes, response);
});
