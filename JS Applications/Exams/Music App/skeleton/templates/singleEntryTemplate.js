import { html } from "../../node_modules/lit-html/lit-html.js"

export function singleEntryLoggedOut(entry){
    return html`
    <div class="card-box">
    <img src="${entry.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${entry.name}</p>
            <p class="artist">Artist: ${entry.artist}</p>
            <p class="genre">Genre: ${entry.genre}</p>
            <p class="price">Price: ${entry.price}</p>
            <p class="date">Release Date: ${entry.releaseDate}</p>
        </div>
    </div>
</div> `
}

export function singleEntryLoggedIn(entry){
    return html`
    <div class="card-box">
                <img src="${entry.imgUrl}">
                <div>
                <div class="text-center">
                    <p class="name">Name: ${entry.name}</p>
                    <p class="artist">Artist: ${entry.artist}</p>
                    <p class="genre">Genre: ${entry.genre}</p>
                    <p class="price">Price: ${entry.price}</p>
                    <p class="date">Release Date: ${entry.releaseDate}</p>
                </div>
                    <div class="btn-group">
                        <a href="/albums/${entry._id}" id="details">Details</a>
                    </div>
                </div>
</div>`
}