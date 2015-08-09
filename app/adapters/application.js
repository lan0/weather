import DS from 'ember-data';
import Config from '../config/environment';
import attachParams from '../utils/attach-params';

export default DS.RESTAdapter.extend(Config.openWeatherApi, {
  params: {
    APPID: Config.openWeatherMap.apiKey,
    units: Config.openWeatherMap.units
  },

  buildURL() {
    var url = this._super.apply(this, arguments);
    return attachParams(url, this.get('params'));
  }
});
