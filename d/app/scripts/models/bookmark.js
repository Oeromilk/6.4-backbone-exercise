var Backbone = require('backbone');

var BookMark = Backbone.Model.extend({
  idAttribute: '_id'
});

var BookMarkCollection = Backbone.Collection.extend({
  model: BookMark,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/bookmarkapp'
});

module.exports = {
  BookMark: BookMark,
  BookMarkCollection: BookMarkCollection
};
