var Backbone = require('backbone');

var ContactInfo = Backbone.Model.extend({

});

var ContactInfoCollection = Backbone.Collection.extend({
  model: ContactInfo,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/contactinfo'
});

module.exports = {
  ContactInfo: ContactInfo,
  ContactInfoCollection: ContactInfoCollection
};
