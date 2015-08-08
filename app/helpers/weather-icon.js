import Ember from 'ember';

export function weatherIcon([name]) {
  var escaped = Ember.Handlebars.Utils.escapeExpression(name);
  return new Ember.Handlebars.SafeString(
    '<i class="wi wi-' + escaped + '"></i>'
  );
}

export default Ember.Helper.helper(weatherIcon);
