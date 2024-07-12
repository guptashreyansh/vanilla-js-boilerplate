# vanilla-js-boilerplate

A boilerplate to create light-weight websites. It uses tailwindcss. Adds webpack to build production assets. Implements minification of assets, compilation into single file, hashed filenames for caching and cache expiry.

The generated projects can be easily deployed on GitHub pages.

Production assets are built in `/docs` folder since GitHub does not allow customizing the deployment folder.

## Install packages

`yarn install --check-files`

## Start development

`yarn run start`

## Build for production

`yarn run build`

## Commit and push

Setup deployment on GitHub Pages. Deploy from `/docs` directory.
