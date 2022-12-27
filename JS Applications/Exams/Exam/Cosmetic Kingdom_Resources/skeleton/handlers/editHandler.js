import { getToken, getUser } from "../services/auth.js";
import { getSingleEntry } from "../services/entries.js";
import { editTemplate } from "../templates/editTemplate.js";


export async function editHandler(ctx){
    let user = getUser()
    let id = ctx.params["id"]
    let entry = await getSingleEntry(id)
    let entryData = await entry.json()
    if (getToken() && user._id == entryData._ownerId){
        ctx.render(editTemplate(ctx, entryData))
    }
}   