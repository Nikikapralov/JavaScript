import { createTemplate } from "../templates/createTemplate.js";

export function createHandler(ctx){
    ctx.render(createTemplate(ctx))
}