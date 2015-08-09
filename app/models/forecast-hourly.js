import DS from 'ember-data';

export default DS.Model.extend({
  forecasts: DS.hasMany('forecast-weather')
});
