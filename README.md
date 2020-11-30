# Wikist
[![CI](https://github.com/lucka-me/wikist/workflows/CI/badge.svg)](https://github.com/lucka-me/wikist/actions?query=workflow%3ACI "CI Workflow") [![CD Status](https://github.com/lucka-me/wikist/workflows/CD/badge.svg)](https://github.com/lucka-me/wikist/actions?query=workflow%3ACD "CD Workflow")  
[![Release](https://img.shields.io/github/v/release/lucka-me/wikist)](https://github.com/lucka-me/wikist/releases/latest "Last release") [![Website](https://img.shields.io/website?url=https%3A%2F%2Flucka.moe%2Fwikist)](https://lucka.moe/wikist "Website") [![License](https://img.shields.io/github/license/lucka-me/wikist)](./LICENSE "License")

## Description

Wiki experience at a glance.

## Usage
```sh
$ git checkout main # If you hope to run the latest deployed version
$ npm install
$ npm start # Serve for development
$ npm run build # Build for production
```

## Configure
To configure the contents, edit `JSON` files in `src/data`

### `profile.json`
An object of your information.

- `name` Your name
- `avatar` URL to your avatar, `180x180px` recommended
- `babels` List of your Babel, for each babel item:
    - `lang` Language code
    - `level` Babel level, 0~5 or N

### `wikis.json`
A list of all wikis, for each wiki item:

- `url` API path of the wiki, i.e. `https://zh.wikipedia.org/w` for Wikipedia
- `user` Username in the wiki