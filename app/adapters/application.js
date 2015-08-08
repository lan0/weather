import DS from 'ember-data';
import Config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'http://api.openweathermap.org',
  namespace: 'data/2.5',

  params: {
    APPID: Config.openWeatherMap.apiKey,
    units: Config.openWeatherMap.units
  },

  buildURL() {
    var url = this._super.apply(this, arguments);
    return this._attachParams(url);
  },

  _attachParams(url) {
    if (url.indexOf('?') === -1 && url.indexOf('&') === -1) {
      url += '?';
    } else {
      url += '&';
    }
    const params = this.get('params');
    let chunks = [];
    for (let param in params) {
      chunks.push(param + '=' + params[param]);
    }
    chunks = chunks.join('&');
    return url + chunks;
  }
});
