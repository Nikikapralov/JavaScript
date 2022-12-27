import { html } from "../../node_modules/lit-html/lit-html.js"
import { onClick } from "../eventListeners/button/click.js"
import { logout} from "../services/auth.js"

export function navbarTemplateNotLogged(ctx){
    return html`
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/products">Products</a>
          </div>

          <div class="guest">
            <a  href="/login">Login</a>
            <a  href="/register">Register</a>
          </div>
        </nav>
    `
}

export function navbarTemplateLogged(ctx){
    return html`
            <!-- Navigation -->
            <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/products">Products</a>
          </div>

          <!-- Logged-in users -->
          <div class="user">
            <a href="/products/add">Add Product</a>
            <a @click=${onClick(logout, undefined, ctx, '/products')} href="/logout">Logout</a>
          </div>
        </nav>
`
}