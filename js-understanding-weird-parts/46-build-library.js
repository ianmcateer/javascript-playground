(function(global, $) {
  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language)
  }

  Greetr.prototype = {}

  Greetr.init = function(firstName, lastName, language){
    var self = this
    self.firstName = firstName || ''
    self.lastName = lastName || ''
    self.language = language || 'en'
  }
})(window, jQuery);


var g = G$(firstname, lastname, language)