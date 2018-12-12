// SVG Injector
// -----------------------------------------------------
// -----------------------------------------------------

// Elements to inject
var elementsToInject = document.querySelectorAll('img.inject-svg');

// Options
var injectorOptions = {
  evalScripts: 'once',
  pngFallback: 'assets/png'
};

var afterAllInjectionsFinishedCallback = function (totalSVGsInjected) {
  // Callback after all SVGs are injected
  console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
};

var perInjectionCallback = function (svg) {
  // Callback after each SVG is injected
  console.log('SVG injected: ' + svg);
};

// create injector configured by options
var injector = new SVGInjector(injectorOptions);

// Trigger the injection
injector.inject(
  elementsToInject,
  afterAllInjectionsFinishedCallback,
  perInjectionCallback
);
