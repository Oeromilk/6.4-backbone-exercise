var views = require('./views/posts.js');
var models = require('./models/posts.js');
var $ = require('jquery');


$(function(){
  var posts = new models.PostCollection();

  var postFormView = new views.PostFormView({collection: posts});
  $('.app').append(postFormView.render().el);


});
