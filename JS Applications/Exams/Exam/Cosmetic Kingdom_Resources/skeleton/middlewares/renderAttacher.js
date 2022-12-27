import { render } from "../../node_modules/lit-html/lit-html.js";

let mainContent = document.getElementsByTagName("main")[0]

function renderWrapper(template){
    render(template, mainContent)
}

export function attachRender(ctx, next){
    ctx.render = renderWrapper
    next()
}