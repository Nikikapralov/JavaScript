import { render } from "../../node_modules/lit-html/lit-html.js"
import { navigationHandler } from "../handlers/navigationHandler.js"


let headerElement = document.getElementsByTagName("header")[0]

export function renderNavbar(ctx, next){
    render(navigationHandler(ctx), headerElement)
    next()
}