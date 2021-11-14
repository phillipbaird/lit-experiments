# Lit + TailwindCSS

## Motivation

I like using TailwindCSS for styling.  Web components that use a shadow-root encapsulate their CSS so they do not affect other web components.  This encapsulation also prevents external CSS from being used in the component.  Therefore, by default Tailwind classes will have no effect if used in a Lit component.  

This tiny project tests two possibilities. The first is to remove the shadow-root from the web-component.  This allows the external CSS to apply to the components sub-DOM.  The second is to import the CSS into a component with a shadow-root.  Again this makes the CSS available to the sub-DOM.  Take a look at `src/no-shadow-root.ts` and `src/imported-css.ts` to see how this is done.

Run the demo [here](https://phillipbaird.github.io/lit-experiments/lit-plus-tailwindcss/index.html).

## TailwindCSS setup

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

Set up `tailwind.config.js` to use JIT mode and direct it to our `src` directory.

Add a default Tailwind css file as `src/index.css`.

Configure PostCSS via `.postcssrc.json` so ViteJS runs Tailwind.


## Conclusions

There's no silver-bullet.

Removing the shadow-root seems to be the simplest solution. Probably ok if you're building an app.  Not a good solution for building a component library.

Importing the CSS into each component strikes me as being potentially inefficient as the CSS file grows.

The fallback solution is to use CSS styles for each component which is what the Lit developers recommend.

## Acknowledgements

The HTML rendered in this example was grabbed from a Pricing example found at the [Tailblocks](https://tailblocks.cc/) website.

Ideas for handling external CSS were borrowed from [this YouTube video](https://www.youtube.com/watch?v=Y0uxb4ga44Y) by Marcus Hellberg.