var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/bookmark.js');
var views = require('./views/bookmark.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    this.collection = new models.BookMarkCollection();
    this.collection.fetch();
  },
  index: function(){
    console.log(this.collection);
    var bookMarkForm = new views.BookMarkForm({collection: this.collection});
    var bookMarkList = new views.ListBookMark({collection: this.collection});

    $('.app').html(bookMarkForm.render().el)
      .append(bookMarkList.render().el);;
  }
});

var router = new AppRouter();

module.exports = router;
