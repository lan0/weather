import attachParams from '../../../utils/attach-params';
import { module, test } from 'qunit';

module('Unit | Utility | attach params', {
  url: 'http://test.com'
});

test('it works for empty url', function(assert) {
  var result = attachParams(this.url, {param1: 'val1', param2: 'val2'});
  assert.equal(result, this.url + '?param1=val1&param2=val2');
});

test('it works for url with param', function(assert) {
  var result = attachParams(this.url + '?param=val', {param1: 'val1'});
  assert.equal(result, this.url + '?param=val&param1=val1');
});
