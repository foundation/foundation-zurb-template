import $ from 'jquery'
import whatInput from 'what-input';
import foundationImport from './lib/foundation-all';
window.Foundation = foundationImport($);
window.$ = $;
$(document).foundation();
