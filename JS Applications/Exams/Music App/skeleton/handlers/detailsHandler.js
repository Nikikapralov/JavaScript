import { getToken, getUser } from "../services/auth.js";
import { getSingleEntry } from "../services/entries.js";
import { getSingleEntryUrl } from "../settings.js";
import { detailsTemplateLoggedIn, detailsTemplateLoggedOut } from "../templates/detailsTemplate.js";


export async function detailsHandler(ctx){
    let entry = await getSingleEntry(getSingleEntryUrl/ctx.params.albumId)
    let user = getUser()
    if (getToken() && user._id == entry._id){
        ctx.render(detailsTemplateLoggedIn(ctx, entry))
    }
    else{
        ctx.render(detailsTemplateLoggedOut(ctx, entry))
    }
}