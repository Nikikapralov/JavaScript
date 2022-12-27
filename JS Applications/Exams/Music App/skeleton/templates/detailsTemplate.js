import { html } from "../../node_modules/lit-html/lit-html.js"

export function detailsTemplateLoggedOut(ctx, entry){
    return html`
    <section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${entry.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${entry.name}</h1>
                <h3>Artist: ${entry.artist}</h3>
                <h4>Genre: ${entry.genre}</h4>
                <h4>Price: ${entry.price}</h4>
                <h4>Date: ${entry.releaseDate}</h4>
                <p>Description: ${entry.description}</p>
            </div>
        </div>
    </div>
</section>
    `
}

export function detailsTemplateLoggedIn(ctx, entry){
    return html`
    <section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${entry.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${entry.name}</h1>
                <h3>Artist: ${entry.artist}</h3>
                <h4>Genre: ${entry.genre}</h4>
                <h4>Price: ${entry.price}</h4>
                <h4>Date: ${entry.releaseDate}</h4>
                <p>Description: ${entry.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            <div class="actionBtn">
                <a href="/albums/edit/:id" class="edit">Edit</a>
                <a href="/albums/remove/:id" class="remove">Delete</a>
            </div>
        </div>
    </div>
</section>
    `
}