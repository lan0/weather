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

  const json = serializer.extractArray(store, store.modelFor('city'), response);

  assert.deepEqual(json, [{name: 'Gotham'}]);
});

test('it adds a key for the city', function(assert) {
  const response = {
    name: 'Gotham'
  };

  const json = serializer.extractSingle(store, store.modelFor('city'), response, 1);

  assert.deepEqual(json, {name: 'Gotham'});
});
