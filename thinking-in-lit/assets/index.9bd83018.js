import{r as b,e as p,t as k,s as l,p as n,n as d,i as m}from"./vendor.766400d6.js";const x=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};x();var $=Object.defineProperty,w=Object.getOwnPropertyDescriptor,c=(t,o,r,i)=>{for(var e=i>1?void 0:i?w(o,r):o,s=t.length-1,a;s>=0;s--)(a=t[s])&&(e=(i?a(o,r,e):a(e))||e);return i&&e&&$(o,r,e),e};const O=[{category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{category:"Sporting Goods",price:"$9.99",stocked:!0,name:"Baseball"},{category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}];let u=class extends l{render(){return n`        
      <tr>
        <td>${this.product.stocked?this.product.name:n`
          <span class='notstocked'>
            ${this.product.name}
          </span>`}
        </td>
        <td class='price'> ${this.product.price} </td>
      </tr>`}};u.styles=b`
    :host {
      display: contents;
    }
    .price {
      text-align: right;
    }
    .notstocked {
      color: rgba(220, 38, 38, 1);
    }
  `;c([p({type:Object})],u.prototype,"product",2);u=c([d("product-row")],u);let h=class extends l{render(){return n`<tr><td colspan='2'>${this.category}</td></tr>`}};h.styles=b`
    :host {
      display: contents;
    }
  `;c([p()],h.prototype,"category",2);h=c([d("product-category-row")],h);class v{constructor(o,r){this.filterText=o,this.isStockOnly=r}}let f=class extends l{render(){const t=[];let o=null;return this.products.forEach(r=>{r.name.indexOf(this.filter.filterText)!==-1&&(this.filter.isStockOnly&&!r.stocked||(r.category!==o&&t.push(n`<product-category-row .category=${r.category}></product-category-row>`),t.push(n`<product-row .product=${r}></product-row>`),o=r.category))}),n`
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>${t}</tbody>
      </table>
    `}};c([p({type:Array})],f.prototype,"products",2);c([p({type:Object})],f.prototype,"filter",2);f=c([d("product-table")],f);let y=class extends l{dispatchFilterChangeEvent(t,o){const r={detail:new v(t,o),bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("searchChanged",r))}handleFilterTextChange(t){this.dispatchFilterChangeEvent(t.target.value,this.instock.checked)}handleInStockChange(t){this.dispatchFilterChangeEvent(this.filtertext.value,t.target.checked)}render(){return n`
      <form>
        <input id='filtertext' type='text' placeholder='Search...' @change=${this.handleFilterTextChange} />
        <p>
          <input id='instock' type='checkbox' @change=${this.handleInStockChange}/>
          Only show products in stock
        </p>
      </form>
    `}};c([m("#filtertext",!0)],y.prototype,"filtertext",2);c([m("#instock",!0)],y.prototype,"instock",2);y=c([d("search-bar")],y);let g=class extends l{constructor(){super();this.filter=new v("",!1),this.addEventListener("searchChanged",t=>{this.filter=t.detail})}render(){return n`
      <div>
        <search-bar></search-bar>
        <product-table .products=${O} .filter=${this.filter}></product-table>
      </div>
    `}};g.styles=b`
    div {
      padding: 1rem;
    }
  `;c([k()],g.prototype,"filter",2);g=c([d("filterable-product-table")],g);
