# Sanity Forms Plugin

Input component for rendering fieldsets as forms

[![NPM version](https://img.shields.io/npm/v/sanity-plugin-forms?style=for-the-badge)](https://www.npmjs.com/package/sanity-plugin-forms) [![NPM Downloads](https://img.shields.io/npm/dw/sanity-plugin-forms?style=for-the-badge)](https://www.npmjs.com/package/sanity-plugin-forms)

### Demo

Clone the original [demo repository](https://github.com/azzlack/sanity-plugin-forms-demo) and run `sanity start` to see how it works.

### How do I use it?

```
TODO
```

### Development

Run the following commands at the root of this repository.

NPM

```
npm i
npm link
```

Yarn

```
yarn install
yarn link
```

Now you can start developing the plugin.  
To include it in your Sanity test site, navigate to the root folder of your cms project and run `npm link sanity-plugin-forms` or `yarn link sanity-plugin-forms`. You will now reference the local version of the when using `import Forms from "sanity-plugin-forms"` in your files.

To debug the plugin files in you then need to run `sanity start --preserve-symlinks` in your cms project, and `npm run dev` in your sanity-plugin-forms repository folder.
