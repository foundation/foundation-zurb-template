# ZURB WebApp Template

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

**Please open all issues with this template on the main [Foundation for Sites](https://github.com/zurb/foundation-sites/issues) repo.**

This is the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). We use this template at ZURB to deliver static code to our clients. It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 6 only, Tested with 6.11.4)
- [Git](https://git-scm.com/)

### Setup

To set up the template, first download it.

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectName
yarn
```

Now `cd` to your project name and run `npm start` or `foundation watch` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build` or `foundation build`.

---

# Panini Helpers

We've added a Panini helpers for per-page or per-layout styles.

[SEE EXAMPLE](http://notebooks.zurb.com/posts/10139362?t=f9b74287fe3ac074)

---

# Mixins

We've added a few handy mixins for maintainable repeated code and faster development:

### Avatar

### Container Border

### Flex Mixins

---

# Additional Project Dependencies

The following dependencies are at your disposal:

### SVG Injector

Inject an SVG by using an `img` tag with the `.inject-me` class like so:

`<img src="{{root}}assets/img/think.svg" class="inject-me" alt="think icon">`

### Slick Carousel

### AOS (Animate on Scroll)

### Tablesaw
