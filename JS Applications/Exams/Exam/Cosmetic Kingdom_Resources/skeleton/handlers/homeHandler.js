import { homeTemplate } from "../templates/homeTemplate.js";

export function homeHandler(ctx){
    ctx.render(homeTemplate(ctx))
}