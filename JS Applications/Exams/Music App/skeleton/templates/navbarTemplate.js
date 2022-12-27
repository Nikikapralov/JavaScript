import { html } from "../../node_modules/lit-html/lit-html.js"
import { onClick } from "../eventListeners/button/click.js"
import { logout } from "../services/auth.js"

export function navbarTemplateNotLogged(ctx){
    return html`
        <nav>
        <img src="./images/headphones.png">
        <a href="/">Home</a>
        <ul>
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        </ul>
    </nav>
    `
}

export function navbarTemplateLogged(ctx){
    return html`
    <nav>
    <img src="./images/headphones.png">
    <a href="/">Home</a>
    <ul>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/create">Create Album</a></li>
        <li><a @click=${onClick(logout, undefined, ctx, "/")} href="/logout">Logout</a></li>
    </ul>
</nav>
`
}