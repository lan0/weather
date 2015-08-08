import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractSingle(store, type, payload, id) {
    payload = {
      city: payload
    };
    return this._super(store, type, payload, id);
  },

  extractArray(store, type, payload) {
    if (payload.list === undefined) {
      payload.list = [
        payload
      ];
    }
    payload = {
      cities: payload.list
    };
    return this._super(store, type, payload);
  }
});
