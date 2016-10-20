window.$ = window.jQuery = require('jquery');
var Backbone = require('backbone');
var contactInfoTemplate = require('../../templates/contactinfo.hbs');

var ContactInfoView = Backbone.View.extend({
  tagName: 'form',
  template: contactInfoTemplate,
  attributes: {
    'class': 'well'
  },
  events: {
    'submit': 'addContactInfo'
  },
  render: function(){
    var contactTemp = this.template();
    this.$el.html(contactTemp);

    return this;
  },
  addContactInfo: function(e){
    e.preventDefault();

    var $submitInfo = $('#contact-submit');

    $submitInfo.on('submit', function(e){
      e.preventDefault();

      $submitInfo.html('Posting...');

      post.fetch().then(function(){
        $submitInfo.html('Submit');
      });
    })

    var contactName = $('#name').val();
    var contactAddress = $('#address').val();
    var contactNumber = $('#number').val();
    this.collection.create({
      name: contactName,
      address: contactAddress,
      number: contactNumber
    });

    $('#name').val('');
    $('#address').val('');
    $('#number').val('');
  }
});

module.exports = {
  ContactInfoView: ContactInfoView
};
