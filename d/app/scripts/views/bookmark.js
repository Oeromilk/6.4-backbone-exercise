var $ = require('jquery');
var Backbone = require('backbone');

var bookMarkFormTemp = require('../../templates/bookmarkform.hbs');
var bookMarkListTemp = require('../../templates/bookmarklist.hbs');

var BookMarkForm = Backbone.View.extend({
  tagName: 'form',
  className: 'form-inline well',
  template: bookMarkFormTemp,
  events: {
    'submit': 'addBookForm'
  },
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    this.$el.html(this.template());

    return this;
  },
  addBookForm: function(e){
    e.preventDefault();

    var newBookMark = {
      url: $('#url-link').val(),
      title: $('#link-title').val(),
      tags: $('#link-tags').val()
    };

    this.collection.create(newBookMark);

    $('#url-link').val('');
    $('#link-title').val('');
    $('#link-tags').val('');
  }
});

var ListBookMark = Backbone.View.extend({
  tagName: 'table',
  className: 'table table-striped',
  template: bookMarkListTemp,
  initialize: function(){
    console.log(this.colletion);
    this.listenTo(this.collection, 'add', this.renderBookMark);
  },
  render: function(){

    return this;
  },
  renderBookMark: function(model){
    console.log(arguments);
    var context = model.toJSON();
      this.$el.append(this.template(context));
  }
});

module.exports = {
  BookMarkForm: BookMarkForm,
  ListBookMark: ListBookMark
};
