import { html } from "../../node_modules/lit-html/lit-html.js"
import { onSubmit } from "../eventListeners/form/submit.js"
import { login } from "../services/auth.js"
import { noEmptyFields } from "../validators/formValidators.js"


export function loginTemplate(ctx){
    let validators = [noEmptyFields]
    return html`
<section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${onSubmit(login, validators, ctx, "/")} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
    `
}