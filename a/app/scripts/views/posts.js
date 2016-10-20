window.$ = window.jQuery = require('jquery');
var Backbone = require('backbone');
var postTemp = require('../../templates/postform.hbs');

var PostFormView = Backbone.View.extend({
  tagName: 'form',
  template: postTemp,
  attributes: {
    'class': 'form-horizontal well'
  },
  events: {
    'submit': 'addPost'
  },
  render: function(){
    var addPostTemp = this.template();
    this.$el.html(addPostTemp);

    return this;
  },
  addPost: function(e){
    e.preventDefault();

    var $submitPost = $('#submit-post');

    $submitPost.on('submit', function(e){
      e.preventDefault();
      $submitPost.html('Posting...');

      post.fetch().then(function(){
        $submitPost.html('Submit');
      });
    })

    var postTitle = $('#post-title').val();
    var postBody = $('#post-body').val();
    this.collection.create({
      title: postTitle,
      body: postBody
    });

    $('#post-title').val('');
    $('#post-body').val('');
  }
});

module.exports = {
  PostFormView: PostFormView
};
