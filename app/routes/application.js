import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    citySearch(name) {
      this.transitionTo('city', name);
    }
  }
});
