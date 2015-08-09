import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,

  normalizeSingleResponse(store, type, payload, id) {
    payload = this.transformPayload(payload);
    return this._super(store, type, payload, id);
  },

  transformPayload(payload) {
    payload.id = payload.latitude + ',' + payload.longitude;
    if (payload.hourly) {
      payload.hourly.forecasts = payload.hourly.data;
      payload.hourly.id = payload.id;
      delete payload.hourly.data;
    }
    if (payload.daily) {
      payload.daily.forecasts = payload.daily.data;
      payload.daily.id = payload.id;
      delete payload.daily.data;
    }
    return {
      forecast: payload
    };
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
