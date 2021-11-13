# Thinking In Lit

A tiny project to learn about [Lit](https://lit.dev), [ViteJS](https://vitejs.dev) and Typescript.

This project reimplements the example from the React docs in [Thinking in React](https://reactjs.org/docs/thinking-in-react.html), thus the name.

Run the demo [here](https://phillipbaird.github.io/lit-experiments/thinking-in-lit/index.html).

## Building

`cd thinking-in-lit`

`npm i` - install dependancies.

`npm run dev` - run a development server

`npm run build` - build the project and output to the `/dist` directory.

`npm run serve` - serve the built project from the `/dist` directory.



## Learnings

1. Lit and React seem similar on the surface, e.g. they both have properties and state, but their implementations are quite different, e.g. a virtual dom is not used in Lit.  Suggest reading the [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) article and comparing it's code to `src/thinking-in-lit.ts`.

2. You can scaffold a new ViteJS + Lit + Typescript project using `npm init vite@latest my-app -- --template lit-ts`.  This creates a ViteJS project that builds as a library rather than a deployable application.  Changes to the generated ViteJS config file (`vite.config.ts`) were required to create a deployable application.  
 
3. Lit creates [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).  This introduces custom elements into the DOM. In the 'Thinking in React' example it creates components to represent the rows of a table. When we take the same approach with Lit the custom elements sit between the `tbody` and `tr` elements.  Custom elements are `display: inline` by default so this causes the `tr` elements to layout incorrectly.
    ```html
    <tbody>
        <product-row>
            <tr></tr>
        </product-row>
    </tbody>
    ```
    To resolve this we change the default CSS property on the custom element (i.e. `<product-row>`) to `display: contents;`. This effectively makes the custom element disappear as if the `tr` elements have become the children of the `tbody`.

## Acknowledgements

File `src/normalize.css` was generated using [TailwindCSS](https://tailwindcss.com).
