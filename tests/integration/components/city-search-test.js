import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('city-search', 'Integration | Component | city search', {
  integration: true
});

test('it sends the search action with the correct input', function(assert) {
  assert.expect(1);

  this.set('input', 'Gotham');
  this.on('citySearch', (name) => {
    assert.equal(name, 'Gotham', 'city name gets sent in action');
  });

  this.render(hbs`{{city-search input=input search="citySearch"}}`);

  this.$('.search-button').trigger('click');
});
