import { html } from "../../node_modules/lit-html/lit-html.js"

export function singleEntry(entry){
    return html`
    <div class="product">
            <img src="${entry.imageUrl}" alt="example1" />
            <p class="title">
              ${entry.title}
            </p>
            <p><strong>Price:</strong><span class="price">${entry.price}</span>$</p>
            <a class="details-btn" href="products/details/${entry._id}">Details</a>
          </div>
    `
}