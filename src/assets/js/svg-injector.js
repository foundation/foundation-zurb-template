// SVG Injector
// -----------------------------------------------------
// -----------------------------------------------------

import SVGInjector from 'svg-injector';

// Elements to inject
var mySVGsToInject = document.querySelectorAll('img[inject-svg]');

// Do the injection
SVGInjector(mySVGsToInject);
