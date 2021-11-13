import { html, css, LitElement } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'

import './normalize.css'

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

type Product = typeof PRODUCTS[number];

@customElement('product-row')
class ProductRow extends LitElement {

  // Set `display: contents;` so custom element does not affect table layout.
  static styles = css`
    :host {
      display: contents;
    }
    .price {
      text-align: right;
    }
    .notstocked {
      color: rgba(220, 38, 38, 1);
    }
  `

  @property({ type: Object })
  product!: Product;

  render() {
    return html`        
      <tr>
        <td>${this.product.stocked
        ? this.product.name
        : html`
          <span class='notstocked'>
            ${this.product.name}
          </span>`}
        </td>
        <td class='price'> ${this.product.price} </td>
      </tr>`
  }

}

@customElement('product-category-row')
class ProductCategoryRow extends LitElement {

  // Set `display: contents;` so custom element does not affect table layout.
  static styles = css`
    :host {
      display: contents;
    }
  `

  @property()
  category!: string;

  render() {
    return html`<tr><td colspan='2'>${this.category}</td></tr>`
  }
}

class Filter {
  constructor(filterText: string, inStockOnly: boolean) {
    this.filterText = filterText;
    this.isStockOnly = inStockOnly;
  }
  filterText: string;
  isStockOnly: boolean;
}

@customElement('product-table')
class ProductTable extends LitElement {

  @property({ type: Array })
  products!: Product[];

  @property({ type: Object })
  filter!: Filter;

  render() {
    const rows: any[] = [];
    let lastCategory: string | null = null;
    this.products.forEach((product) => {
      if (product.name.indexOf(this.filter.filterText) === -1) {
        return;
      }
      if (this.filter.isStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(html`<product-category-row .category=${product.category}></product-category-row>`);
      }
      rows.push(html`<product-row .product=${product}></product-row>`)
      lastCategory = product.category;
    });

    return html`
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `
  }
}

@customElement('search-bar')
class SearchBar extends LitElement {
  @query('#filtertext', true) filtertext!: HTMLInputElement;
  @query('#instock', true) instock!: HTMLInputElement;

  dispatchFilterChangeEvent(filterText: string, inStockOnly: boolean): void {
    const options = {
      detail: new Filter(filterText, inStockOnly),
      bubbles: true,
      composed: true
    }
    this.dispatchEvent(new CustomEvent('searchChanged', options));
  }

  handleFilterTextChange(e: Event): void {
    this.dispatchFilterChangeEvent((e.target as HTMLInputElement).value, this.instock.checked);
  }

  handleInStockChange(e: Event): void {
    this.dispatchFilterChangeEvent(this.filtertext.value, (e.target as HTMLInputElement).checked);
  }

  render() {
    return html`
      <form>
        <input id='filtertext' type='text' placeholder='Search...' @change=${this.handleFilterTextChange} />
        <p>
          <input id='instock' type='checkbox' @change=${this.handleInStockChange}/>
          Only show products in stock
        </p>
      </form>
    `
  }
}

@customElement('filterable-product-table')
export class FilterableProductTable extends LitElement {
  static styles = css`
    div {
      padding: 1rem;
    }
  `

  @state()
  filter = new Filter('', false);

  constructor() {
    super();
    this.addEventListener('searchChanged', (e) => {
      this.filter = (e as CustomEvent).detail;
    });
  }

  render() {
    return html`
      <div>
        <search-bar></search-bar>
        <product-table .products=${PRODUCTS} .filter=${this.filter}></product-table>
      </div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'filterable-product-table': FilterableProductTable,
    'search-bar': SearchBar,
    'product-table': ProductTable,
    'product-row': ProductRow,
    'product-category-row': ProductCategoryRow,
  }
}
