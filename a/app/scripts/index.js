var views = require('./views/blogs.js');
var models = require('./models/blogs.js');
var $ = require('jquery');


$(function(){
  var posts = new models.PostCollection();

  var postFormView = new views.PostFormView({collection: posts});
  $('.app').append(postFormView.render().el);


});
