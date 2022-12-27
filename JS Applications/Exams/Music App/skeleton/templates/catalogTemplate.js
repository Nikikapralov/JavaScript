import { html } from "../../node_modules/lit-html/lit-html.js"
import { singleEntryLoggedIn, singleEntryLoggedOut } from "./singleEntryTemplate.js"

export function catalogTemplateLoggedIn(entries){
    if (Object.keys(entries).length == 0){
        return html`
        <section id="catalogPage">
        <h1>All Albums</h1>
        <p>No Albums in Catalog!</p>
        </section>`
    }

    return html`
        <section id="catalogPage">
        <h1>All Albums</h1>
${entries.map( x => singleEntryLoggedIn(x))}</section>`

}

export function catalogTemplateLoggedOut(entries){
    if (Object.keys(entries).length == 0){
        return html`
        <section id="catalogPage">
        <h1>All Albums</h1>
        <p>No Albums in Catalog!</p>
    </section>`
    }

    return html`
    <section id="catalogPage">
    <h1>All Albums</h1>
${entries.forEach( x => singleEntryLoggedOut(x))}</section>`
}