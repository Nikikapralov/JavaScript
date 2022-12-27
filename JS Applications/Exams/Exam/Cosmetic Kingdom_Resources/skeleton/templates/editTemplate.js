import { html } from "../../node_modules/lit-html/lit-html.js"
import { onSubmit } from "../eventListeners/form/submit.js"
import { editEntry } from "../services/entries.js"
import { noEmptyFields } from "../validators/formValidators.js"


export function editTemplate(ctx, entry){
    let validators = [noEmptyFields]
    return html`
    <section id="edit">
          <div class="form">
            <h2>Edit Product</h2>
            <form @submit=${onSubmit(() => editEntry.bind({}, entry._id), validators, ctx, "/products/details/${entry._id}")} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
                value="${entry.name}"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
                value="${entry.imageUrl}"
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
                value="${entry.category}"
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >${entry.description}</textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
                value="${entry.price}"
              />
              <button type="submit" method="post">post</button>
            </form>`
}