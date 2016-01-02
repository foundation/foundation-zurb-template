import plugins  from 'gulp-load-plugins';
import argv     from 'yargs';
import browser  from 'browser-sync';
import gulp     from 'gulp';
import panini   from 'panini';
import rimraf   from 'rimraf';
import sequence from 'run-sequence';
import sherpa   from 'style-sherpa';

// Load all Gulp plugins into one variable
const $ = plugins();

// Check for --production flag
const isProduction = !!(argv.production);

// Port to use for the development server.
const PORT = 8000;

// Browsers to target when prefixing CSS.
const COMPATIBILITY = ['last 2 versions', 'ie >= 9'];

// File paths to various assets are defined here.
const PATHS = {
  assets: [
    'src/assets/**/*',
    '!src/assets/{!img,js,scss}/**/*'
  ],
  sass: [
    'bower_components/foundation-sites/scss',
    'bower_components/motion-ui/src/'
  ],
  javascript: [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/what-input/what-input.js',
    'bower_components/foundation-sites/js/foundation.core.js',
    'bower_components/foundation-sites/js/foundation.util.*.js',
    // Paths to individual JS components defined below
    'bower_components/foundation-sites/js/foundation.abide.js',
    'bower_components/foundation-sites/js/foundation.accordion.js',
    'bower_components/foundation-sites/js/foundation.accordionMenu.js',
    'bower_components/foundation-sites/js/foundation.drilldown.js',
    'bower_components/foundation-sites/js/foundation.dropdown.js',
    'bower_components/foundation-sites/js/foundation.dropdownMenu.js',
    'bower_components/foundation-sites/js/foundation.equalizer.js',
    'bower_components/foundation-sites/js/foundation.interchange.js',
    'bower_components/foundation-sites/js/foundation.magellan.js',
    'bower_components/foundation-sites/js/foundation.offcanvas.js',
    'bower_components/foundation-sites/js/foundation.orbit.js',
    'bower_components/foundation-sites/js/foundation.responsiveMenu.js',
    'bower_components/foundation-sites/js/foundation.responsiveToggle.js',
    'bower_components/foundation-sites/js/foundation.reveal.js',
    'bower_components/foundation-sites/js/foundation.slider.js',
    'bower_components/foundation-sites/js/foundation.sticky.js',
    'bower_components/foundation-sites/js/foundation.tabs.js',
    'bower_components/foundation-sites/js/foundation.toggler.js',
    'bower_components/foundation-sites/js/foundation.tooltip.js',
    'src/assets/js/!(app.js)**/*.js',
    'src/assets/js/app.js'
  ]
};

const UNCSS_OPTIONS = {
  html: ['src/**/*.html'],
  ignore: [
    new RegExp('^meta\..*'),
    new RegExp('^\.is-.*')
  ]
}

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf('dist', done);
};

// Copy files out of the assets folder
// This task skips over the "img", "js", and "scss" folders, which are parsed separately
function copy() {
  return gulp.src(PATHS.assets)
    .pipe(gulp.dest('dist/assets'));
};

// Copy page templates into finished HTML files
function pages() {
  return gulp.src('src/pages/**/*.{html,hbs,handlebars}')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/',
      data: 'src/data/',
      helpers: 'src/helpers/'
    }))
    .pipe(gulp.dest('dist'));
};

function resetPages(done) {
  gulp.series(panini.refresh, pages, done);
};

function styleGuide(done) {
  sherpa('src/styleguide/index.md', {
    output: 'dist/styleguide.html',
    template: 'src/styleguide/template.html'
  }, done);
};

// Compile Sass into CSS
// In production, the CSS is compressed
function sass() {
  return gulp.src('src/assets/scss/app.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.if(isProduction, $.uncss(UNCSS_OPTIONS)))
    .pipe($.if(isProduction, $.minifyCss()))
    .pipe($.if(!isProduction, $.sourcemaps.write()))
    .pipe(gulp.dest('dist/assets/css'));
};

// Combine JavaScript into one file
// In production, the file is minified
function javascript() {
  return gulp.src(PATHS.javascript)
    .pipe($.sourcemaps.init())
    .pipe($.concat('app.js'))
    .pipe($.if(isProduction, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!isProduction, $.sourcemaps.write()))
    .pipe(gulp.dest('dist/assets/js'));
};

// Copy images to the "dist" folder
// In production, the images are compressed
function images() {
  return gulp.src('src/assets/img/**/*')
    .pipe($.if(isProduction, $.imagemin({
      progressive: true
    })))
    .pipe(gulp.dest('dist/assets/img'));
};

// Start a server with LiveReload to preview the site in
function server() {
  browser.init({
    server: 'dist', port: PORT
  });
};

// Build the "dist" folder by running all of the above tasks
gulp.task('build',
 gulp.series(clean, gulp.parallel(pages, sass, javascript, images, copy), styleGuide));

// Build the site, run the server, and watch for file changes
gulp.task('default', gulp.parallel('build', server, () => {
  gulp.watch(PATHS.assets, copy);
  gulp.watch('src/pages/**/*.html', pages);
  gulp.watch('src/{layouts,partials}/**/*.html', resetPages);
  gulp.watch('src/assets/scss/**/*.scss', sass);
  gulp.watch('src/assets/js/**/*.js', javascript);
  gulp.watch('src/assets/img/**/*', images);
  gulp.watch('src/styleguide/**', styleGuide);
}));
