var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/blogs.js');
var views = require('./views/blogs.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id/': 'displayPost'
  },
  initialize: function(){
    this.collection = new models.BlogPostCollection();
    this.collection.fetch();
    this.active = false;
  },
  index: function(){
    var showBlogList = new views.ShowPosts({collection: this.collection, router: this});

    $('.post-location').html(showBlogList.render().el);
  },
  displayPost: function(id){
    var self = this;

    this.collection.fetch().then(function(){
      var currentBlog = this.active = self.collection.get(id);
      var displayBlogSideView = new views.SidePostView({model: currentBlog, router: self});

      $('.post-detail').html(displayBlogSideView.render().el);


    });

  }
});

var router = new AppRouter();

module.exports = router;
