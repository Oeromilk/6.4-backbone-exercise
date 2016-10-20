var $ = require('jquery');
var views = require('./views/contactinfo.js');
var models = require('./models/contactinfo.js');

$(function(){
  var contactsInfo = new models.ContactInfoCollection();

  var contactInfoFormView = new views.ContactInfoView({collection: contactsInfo});
  $('.app').append(contactInfoFormView.render().el);

});
