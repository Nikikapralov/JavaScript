import { html } from "../../node_modules/lit-html/lit-html.js"

export function detailsTemplateLoggedOut(ctx, entry){
    return html`
            <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${entry.imageUrl}" alt="example1" />
            <p id="details-title">${entry.name}</p>
            <p id="details-category">
              Category: <span id="categories">${entry.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${entry.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span
                  >${entry.description}</span
                >
              </div>
            </div>
            </div>
        </section>

    `
}

export function detailsTemplateLoggedInOwner(ctx, entry){
    return html`
            <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${entry.imageUrl}" alt="example1" />
            <p id="details-title">${entry.name}</p>
            <p id="details-category">
              Category: <span id="categories">${entry.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${entry.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span
                  >${entry.description}</span
                >
              </div>
            </div>
        
                <div id="action-buttons">
            <a href="/products/edit/${entry._id}" id="edit-btn">Edit</a>
            <a href="/products/delete/${entry._id}" id="delete-btn">Delete</a>
            </div>
          </div>
        </section>

    `
}

export function detailsTemplateLoggedIn(ctx, entry){
    return html`
            <section id="details">
            <div id="details-wrapper">
            <img id="details-img" src="${entry.imageUrl}" alt="example1" />
            <p id="details-title">${entry.name}</p>
            <p id="details-category">
                Category: <span id="categories">${entry.category}</span>
            </p>
            <p id="details-price">
                Price: <span id="price-number">${entry.price}</span>$</p>
            <div id="info-wrapper">
                <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span
                    >${entry.description}</span
                >
                </div>
            </div>
        
                <div id="action-buttons">
                <a href="/products/buy/${entry._id}" id="buy-btn">Buy</a>
            </div>
            </div>
        </section>

    `
}
