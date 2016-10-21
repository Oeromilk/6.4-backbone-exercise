var Backbone = require('backbone');
var $ = require('jquery');

var blogListTemp = require('../../templates/bloglist.hbs');
var blogListDisplayTemp = require('../../templates/bloglistdisplay.hbs');
var fullBlogViewTemp = require('../../templates/blogread.hbs');

var ShowPosts = Backbone.View.extend({
  tagName: 'table',
  className: 'table table-hover',
  template: blogListTemp,
  events: {
    'click a': 'hidden'
  },
  initialize: function(config){
    this.router = config.router;
    this.listenTo(this.collection, 'add', this.renderListItems);
  },
  render: function(){
    this.$el.html(this.template());

    return this;
  },
  renderListItems: function(listItem){


    var showBlogTitle = new PostsDisplay({model: listItem, router: this.router});

    this.$el.append(showBlogTitle.render().el);
  },
  hidden: function(e){
    e.preventDefault();

    var fragment = $(e.target).attr('href').replace('#', '');
    console.log(fragment);
    Backbone.history.navigate(fragment, {trigger: true});
  }
});

var PostsDisplay = Backbone.View.extend({
  tagName: 'tbody',
  template: blogListDisplayTemp,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));

    return this;
  }
});

var SidePostView = Backbone.View.extend({
  template: fullBlogViewTemp,
  initialize: function(config){
    this.visible = true;
    this.router = config.router;
  },
  render: function(){
    var showDetail = false;
    console.log(this.router);
    if(this.router.active && this.router.active.get('_id') === this.model.get('_id')){
      showDetail = true;
    }
    console.log(showDetail);
    this.visible = showDetail ? !this.visible : true;

    var modelData = this.model.toJSON();
    console.log(modelData);
    if(this.visible){
      this.$el.html(this.template(modelData));
    }else{
      this.$el.hide();
    }

    return this;
  }
});

module.exports = {
  ShowPosts: ShowPosts,
  PostsDisplay: PostsDisplay,
  SidePostView: SidePostView
};
