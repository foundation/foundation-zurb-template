var $         = require('gulp-load-plugins')();
var argv      = require('yargs').argv;
var assemble  = require('assemble');
var rimraf    = require('rimraf');
var gulpsmith = require('gulpsmith');

// Check for --production flag
console.log(argv);
var isProduction = !!(argv.production);

// File paths to various assets are defined here.
var paths = {
  assets: [
    'src/assets/**/*',
    '!src/assets/{!img,js,scss}/**/*'
  ],
  sass: [
    'bower_components/foundation/scss'
  ],
  javascript: [
    'bower_components/jquery-placeholder/jquery.placeholder.js',
    'bower_components/fastclick/lib/fastclick.js',
    'bower_components/jquery/dist/jquery.js',
    'bower_components/jquery.cookie/jquery.cookie.js',
    'bower_components/modernizr/modernizr.js',
    'bower_components/foundation/js/foundation.js',
    'src/assets/js/**/.js',
    'src/assets/js/app.js'
  ]
}

// Import layouts, partials, and data into Assemble
assemble.layouts('./src/layouts/**/*.html');
assemble.partials('./src/partials/**/*.html');
assemble.data('./src/data/**/*.{json,yml}');

// Delete the "dist" folder
// This happens every time a build starts
assemble.task('clean', function(done) {
  rimraf('./dist', done);
});

// Copy files out of the assets folder
// This task skips over the "img", "js", and "scss" folders, which are parsed separately
assemble.task('copy', ['clean'], function(done) {
  assemble.src(paths.assets)
    .pipe(assemble.dist('./dist/assets'));
});

// Copy page templates into finished HTML files
assemble.task('pages', ['clean'], function() {
  assemble.src('./src/pages/**/*.html')
    .pipe(assemble.dest('./dist'));
});

// Compile Sass into CSS
// In production, the CSS is compressed
assemble.task('sass', ['clean'], function() {
  var uncss = $.if(isProduction, $.uncss({
    html: ['dist/**/*.html']
  }));

  return assemble.src('./src/assets/scss/app.scss')
    .pipe($.sass({
      includePaths: paths.sass,
      outputStyle: (isProduction ? 'compressed' : 'nested'),
      errLogToConsole: true
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(uncss)
    .pipe(assemble.dest('./dist/assets/css'));
});

// Combine JavaScript into one file
// In production, the file is minified
assemble.task('javascript', ['clean'], function() {
  var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));

  return assemble.src(paths.javascript)
    .pipe($.concat('app.js'))
    .pipe(uglify)
    .pipe(assemble.dest('./dist/assets/js'));
});

// Copy images to the "dist" folder
// In production, the images are compressed
assemble.task('images', ['clean'], function() {
  var imagemin = $.if(isProduction, $.imagemin({
    progressive: true
  }));

  return assemble.src('./src/assets/img/**/*')
    .pipe(imagemin)
    .pipe(assemble.dest('./dist/assets/img'));
});

// Build the "dist" folder by running all of the above tasks
assemble.task('build', ['clean', 'pages', 'sass', 'javascript']);

// Start a server with LiveReload to preview the site in
assemble.task('server', ['build'], function() {
  return assemble.src('./dist')
    .pipe($.webserver({
      host: 'localhost',
      port: 8000,
      livereload: true,
      open: true
    }));
});

// Build the site, run the server, and watch for file changes
assemble.task('default', ['build', 'server'], function() {
  assemble.watch(paths.assets, ['copy']);
  assemble.watch(['./src/pages/**/*.hbs'], ['pages']);
  assemble.watch(['./assets/scss/**/*.scss'], ['sass']);
  assemble.watch(['./assets/js/**/*.scss'], ['javascript']);
  assemble.watch(['./src/assets/img/**/*'], ['images']);
});
