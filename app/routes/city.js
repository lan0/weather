import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let search = params.search;
    if (! search) {
      search = 'Vienna';
    }
    return this.get('store').find('city', search).then((city) => {
      this.controllerFor('city').set('forecast', this.get('store').find(
        'forecast',
        city.get('coord.lat') + ',' + city.get('coord.lon')
      ));
      this.controllerFor('city').set('model', city);
    });
  }
});
