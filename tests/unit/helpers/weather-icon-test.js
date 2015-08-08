import { weatherIcon } from '../../../helpers/weather-icon';
import { module, test } from 'qunit';

module('Unit | Helper | WeatherIcon');

test('it generates the correct i tag', function(assert) {
  var result = weatherIcon(['sunset']);
  assert.equal(result.toString(), '<i class="wi wi-sunset"></i>');
});
