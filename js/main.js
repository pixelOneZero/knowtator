var app = (function() {

  var dom = document, self = this;

  // Component function: initializes components based on element's 'data-component' attribute value
  this.Component = () => {
    var setUp = () => {
      var elements = dom.querySelectorAll("[data-component]");
      for (var a = 0; a < elements.length; a++) {
        var componentString = elements[a].getAttribute("data-component");
          try {
            self.Component[componentString](elements[a]);
          }
          catch(e) {
            console.log("error during component initialization: " + e);
          }
        }
    }
    setUp();
  }

  this.Component.knowt = (element) => {
    console.log('knowt component');
  };

  this.initialize = () => {
    app.Component();
  }

  return this;

})();



window.addEventListener('load',function() {
  app.initialize()
} );