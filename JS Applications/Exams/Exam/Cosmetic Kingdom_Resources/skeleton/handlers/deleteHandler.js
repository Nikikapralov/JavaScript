import { getToken, getUser } from "../services/auth.js";
import { deleteEntry, getSingleEntry } from "../services/entries.js";


export async function deleteHandler(ctx){
    let user = getUser()
    let id = ctx.params["id"]
    console.log(id)
    let entry = await getSingleEntry(id)
    let entryData = await entry.json()
    if (getToken() && user._id == entryData._ownerId){
        deleteEntry(id)
        ctx.page.redirect("/products")
    }
}   