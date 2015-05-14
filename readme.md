# Foundation for Sites SSG

This is the static site generator for Foundation for Sites 6. It probably needs a more succinct name.

## Usage

Download:

```bash
git clone https://github.com/zurb/foundation-sites-ssg.git
```

Install (you might need to run `npm i` specifically as `sudo`):

```bash
npm i && bower i
```

Run:

```bash
npm start
```

The SSG uses Assemble to cobble together layouts, pages, partials, and data into a set of flat files. A server with livereload is also active while `npm start` is running. You can view it at:

```
http://localhost:8000
```

Here's what else the SSG does at the moment:
- Compile Sass (via node-sass)
- Concatenate JavaScript

Add the `--production` flag to the command to compile assets for production. Here's what changes:
- Compress CSS after compiling from Sass
- Compress JavaScript after concatenating
- Compress images (JPG, PNG, GIF, and SVG)
