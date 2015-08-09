import { moduleForModel, test } from 'ember-qunit';
import startApp from '../../helpers/start-app';

let store, serializer;

moduleForModel('city', 'Unit | Serializer | city', {
  // Specify the other units that are required for this test.
  needs: ['serializer:city'],

  setup() {
    const app = startApp();
    store = app.__container__.lookup('store:main');
    serializer = app.__container__.lookup('serializer:city');
  }
});

test('it replaces list with cities', function(assert) {
  const response = {
    list: [{
      name: 'Gotham'
    }]
  };

  const jsonApi = serializer.normalizeArrayResponse(store, store.modelFor('city'), response);

  assert.deepEqual(jsonApi.data[0].attributes, {name: 'Gotham'});
});

test('it adds a key for the city', function(assert) {
  const response = {
    name: 'Gotham'
  };

  const jsonApi = serializer.normalizeSingleResponse(store, store.modelFor('city'), response, 1);

  assert.deepEqual(jsonApi.data.attributes, {name: 'Gotham'});
});
