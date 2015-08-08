import Ember from 'ember';

export default Ember.Component.extend({
  input: '',

  actions: {
    search() {
      this.sendAction('search', this.get('input'));
    }
  }
});
