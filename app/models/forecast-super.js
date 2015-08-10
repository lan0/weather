import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  summary: DS.attr('string'),
  icon: DS.attr('string'),

  weatherIcon: Ember.computed('icon', function() {
    const icon = this.get('icon');
    for (let key in this.iconMapping) {
      if (key === icon) {
        return this.iconMapping[key];
      }
    }
    return icon;
  }),

  iconMapping: {
    'clear-day': 'day-sunny',
    'clear-night': 'night-clear',
    'wind': 'strong-wind',
    'partly-cloudy-day': 'day-cloudy',
    'partly-cloudy-night': 'night-partly-cloudy'
  }
});
