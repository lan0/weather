import DS from 'ember-data';
import Config from '../config/environment';
import attachParams from '../utils/attach-params';

export default DS.RESTAdapter.extend(Config.forecastApi, {
  params: {
    APPID: Config.forecast.apiKey,
    units: Config.forecast.units
  },

  buildURL() {
    var url = this._super.apply(this, arguments);
    return attachParams(url + '/' +
      this.get('params.APPID'),
      {units: this.get('params.units')}
    );
  }
});
