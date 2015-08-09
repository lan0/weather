import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,

  normalizeSingleResponse(store, type, payload, id) {
    payload.hourly.forecasts = payload.hourly.data;
    payload.daily.forecasts = payload.daily.data;
    payload.id = payload.latitude + ',' + payload.longitude;
    payload.hourly.id = payload.id;
    payload.daily.id = payload.id;
    delete payload.hourly.data;
    delete payload.daily.data;
    payload = {
      forecast: payload
    };
    return this._super(store, type, payload, id);
  },

  attrs: {
    currently: {
      deserialize: 'records',
      serialize: 'records'
    },
    daily: {
      deserialize: 'records',
      serialize: 'records'
    },
    hourly: {
      deserialize: 'records',
      serialize: 'records'
    }
  }
});
