import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  dt: DS.attr('number'),
  coord: DS.attr(),
  main: DS.attr(),
  weather: DS.attr(),
  wind: DS.attr(),
  sys: DS.attr(),

  timeOfCalculation: Ember.computed('dt', function() {
    return this._convertDate(this.get('dt'));
  }),

  sunrise: Ember.computed('sys.sunrise', function() {
    return this._convertDate(this.get('sys.sunrise'));
  }),

  sunset: Ember.computed('sys.sunset', function() {
    return this._convertDate(this.get('sys.sunset'));
  }),

  iconAlt: Ember.computed('weather.firstObject.main', function() {
    return this.get('weather.firstObject.main');
  }),

  iconUrl: Ember.computed('weather.firstObject.icon', function() {
    return 'http://openweathermap.org/img/w/' + this.get('weather.firstObject.icon') + '.png';
  }),

  _convertDate(timestamp) {
    return new Date(timestamp * 1000);
  }
});