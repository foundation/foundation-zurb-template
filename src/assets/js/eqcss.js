// Import EQCSS into project as `eq`
var eq = require('eqcss')

// Print if EQCSS.apply() is scoped & defined
if (eq.apply) {
  console.log('EQCSS.apply() available')
}

// Print if EQCSS.apply() is scoped & defined
if (eq.throttle) {
  console.log('EQCSS.throttle() available')
}
