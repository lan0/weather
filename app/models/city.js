import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  dt: DS.attr('number'),
  coordinates: DS.attr(),
  main: DS.attr(),
  weather: DS.attr(),
  wind: DS.attr(),
  sys: DS.attr(),

  timeOfCalculation: Ember.computed('dt', function() {
    return new Date(this.get('dt') * 1000);
  })
});