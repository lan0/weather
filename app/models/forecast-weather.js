import DS from 'ember-data';

export default DS.Model.extend({
  summary: DS.attr('string'),
  icon: DS.attr('string'),
  precipProbability: DS.attr('number'),
  temperature: DS.attr('number'),
  apparentTemperature: DS.attr('number'),
  humidity: DS.attr('number'),
  windSpeed: DS.attr('number'),
  windBearing: DS.attr('number')
});
