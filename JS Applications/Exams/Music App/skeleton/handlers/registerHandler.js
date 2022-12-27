import { registerTemplate } from "../templates/registerTemplate.js";

export function registerHandler(ctx){
    ctx.render(registerTemplate(ctx))
}