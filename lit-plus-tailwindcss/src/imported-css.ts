import { LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { sampleHtml } from './common';

import sharedStyles from './index.css';

@customElement('imported-css')
export class ImportedCss extends LitElement {

    static styles = unsafeCSS(sharedStyles);

    render() {
        return sampleHtml();
    }
}
