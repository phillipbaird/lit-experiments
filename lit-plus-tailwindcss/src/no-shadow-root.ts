import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js';
import { sampleHtml } from './common'

class StyledElement extends LitElement {
    // By overriding createRenderRoot and returning `this`, the custom element
    // becomes the root of the component dom rather than a shadow-root node.
    // With no shadow-root the Tailwind classes will be applied.
    createRenderRoot() {
        return this;
    }
}

@customElement('no-shadow-root')
export class NoShadowRoot extends StyledElement {
    render() {
        return sampleHtml();
    }
}
