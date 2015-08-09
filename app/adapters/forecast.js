import DS from 'ember-data';
import Config from '../config/environment';
import attachParams from '../utils/attach-params';
import Ember from 'ember';

export default DS.RESTAdapter.extend(Config.forecastApi, {
  params: {
    apiKey: Config.forecast.apiKey,
    units: Config.forecast.units
  },

  pathForType: function() {
    return this.get('params.apiKey');
  },

  buildURL() {
    let url = this._super.apply(this, arguments);
    return attachParams(url,
      {units: this.get('params.units')}
    );
  },

  generateIdForRecord(store, inputProperties) {
    return inputProperties.latitude + ',' + inputProperties.longitude;
  },

  findRecord(store, type, id, snapshot) {
    return Ember.$.ajax({
      url: this.buildURL(type.modelName, id, snapshot, 'findRecord'),
      dataType: 'jsonp'
    });
  }
});
