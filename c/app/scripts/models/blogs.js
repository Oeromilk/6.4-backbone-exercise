var Backbone = require('backbone');

var BlogPost = Backbone.Model.extend({
  idAttribute: '_id'
});

var BlogPostCollection = Backbone.Collection.extend({
  model: BlogPost,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/dailypost'
});

module.exports = {
  BlogPost: BlogPost,
  BlogPostCollection: BlogPostCollection
};
