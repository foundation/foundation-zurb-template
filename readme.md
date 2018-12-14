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
  - JavaScript module bundling with webpack
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 8 recommended, tested with 8.12.0)
- [Git](https://git-scm.com/)

1. **Download the template.** Do not clone it.

```bash
https://github.com/zurb/foundation-zurb-template
```

2. Unzip and rename the file to your project name. Move it your sites folder.

3. Then open the folder in your command line, and install the needed dependencies:

```bash
cd your_project_name
yarn
```

4. Run `yarn start` to run Gulp. Your compiled site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

5. Change "Project Name" to your project's name in the `index.html`, styleguide > `index.md`, and in the layouts > `default.html` files.

You're ready to go!

To create compressed, production-ready assets, run `yarn run build`.

## Dev Dependencies

#### SVG injector

[npm](https://www.npmjs.com/package/svg-injector)

We are using SVG injector to allow SVG's to be manipulated with CSS from a simple `<img>` tag. Pretty neat!

**Usage**
Add the `inject-svg` attribute to any `img` where you'd need to manipulate with CSS.

`<img inject-svg src="{{root}}assets/img/icons/test-icon.svg" alt="test icon">`

This will apply the `.injected-svg` class to the SVG. Any class you add to the img tag will be applied to the SVG.

---

#### AOS (Animate on Scroll)

[Website](https://michalsnik.github.io/aos/)

**Usage**
Add `data-aos` along with an animation name to an element. Delay is set in ms.

`<div data-aos="fade-up" data-aos-delay="50"></div>`
