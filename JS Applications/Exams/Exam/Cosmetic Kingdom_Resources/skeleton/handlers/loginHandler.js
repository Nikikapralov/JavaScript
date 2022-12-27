import { loginTemplate } from "../templates/loginTemplate.js";

export function loginHandler(ctx){
    ctx.render(loginTemplate(ctx))
}