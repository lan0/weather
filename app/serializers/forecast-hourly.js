import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,

  attrs: {
    forecasts: {
      deserialize: 'records',
      serialize: 'records'
    }
  }
});
