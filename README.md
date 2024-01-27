# Portfolio Site

This repo contains the code for my main [website](https://moonstar-x.dev), made in Next.js.

It is built with a bit of modularity in mind, so technically you could fork it and use it for yourself. There is no strings
hardcoded in the code, everything comes from the `data` folder.

More specifically:

* The `data/blog` folder contains `.md` files that act as blog entries. Creating a file and filling out its front matter is enough
to create the entry. These entries are accessible at `https://moonstar-x.dev/blog/`.
* The `data/work` folder acts similarly, but it's mainly for work articles. These entries are accessible at `https://moonstar-x.dev/work/`.
* The `data/data.json` file includes some objects with settings and information that is then presented on the site.
* The `data/strings.json` file includes the text resources used in the UI. If you wanted, you could translate the site within this file.
I have not added support for localization, so only one of these files can exist.

## Development

To develop this site, install the dependencies:

```text
npm install
```

And run the development server:

```text
npm run dev
```

## Building

To build the site, run:

```text
npm run build
```

## Author

This site was made by [moonstar-x](https://github.com/moonstar-x).
