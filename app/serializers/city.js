import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  normalizeSingleResponse(store, type, payload, id) {
    payload = {
      city: payload
    };
    return this._super(store, type, payload, id);
  },

  normalizeArrayResponse(store, type, payload) {
    payload.cities = payload.list;
    delete payload.list;
    return this._super(store, type, payload);
  }
});
