import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  timezone: DS.attr('string'),

  currently: DS.belongsTo('forecast-weather', {async: false}),

  hourly: DS.belongsTo('forecast-hourly', {async: false}),
  daily: DS.belongsTo('forecast-daily', {async: false})
});
