import DS from 'ember-data';
import ForecastSuper from './forecast-super';
import Ember from 'ember';

export default ForecastSuper.extend({
  precipProbability: DS.attr('number'),
  temperature: DS.attr('number'),
  temperatureMin: DS.attr('number'),
  temperatureMax: DS.attr('number'),
  apparentTemperature: DS.attr('number'),
  humidity: DS.attr('number'),
  windSpeed: DS.attr('number'),
  windBearing: DS.attr('number'),

  time: Ember.computed('id', function() {
    return new Date(this.get('id') * 1000);
  })
});
