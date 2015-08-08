import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let search = params.search;
    if (! search) {
      search = 'Vienna';
    }
    return this.get('store').find('city', search);
  }
});
