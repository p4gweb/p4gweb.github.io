# Phase4Ground __experimental__ web site

This site uses [Svelte](https://svelte.dev)/[Sapper](https://sapper.svelte.dev/)
and [mdsvex](https://mdsvex.pngwn.io/) to render Markdown (or
HTML fragments) pages.

## Content

Content pages are in the **src/routes** directory tree.

## Building

The current web site is hosted on GitHub Pages. This
repository contains a
[GitHub Actions workflow](.github/workflows/sapper_build.yml)
that will rebuild the rendered and optimized web pages
on any push to the master branch.

You can also build a local copy of the site using
the LTS version of [Node.js](https://nodejs.org/en/).

- clone the repository, and change into the directory
- `npm i` to install build dependencies
- then either `npm run dev` to build a _development_
  version of the site, with hot reloading in your
  default browser; or `npm run export` to build a
  _production_ version of the web site
