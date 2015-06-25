if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  UI.registerHelper('trim', function (str) {
        return str.trim();
      });


}
