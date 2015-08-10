import DS from 'ember-data';
import ForecastSuper from './forecast-super';

export default ForecastSuper.extend({
  forecasts: DS.hasMany('forecast-weather')
});
