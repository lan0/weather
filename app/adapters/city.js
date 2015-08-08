import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType() {
    return 'weather';
  },

  urlForFind(id) {
    var url = this._super.apply(this, arguments);
    id = encodeURIComponent(id);
    return url.replace('/' + id, '') + '?q=' + id;
  }
});
