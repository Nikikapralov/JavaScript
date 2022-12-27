import { getToken, getUser } from "../services/auth.js";
import { getSingleEntry } from "../services/entries.js";
import { detailsTemplateLoggedIn, detailsTemplateLoggedInOwner, detailsTemplateLoggedOut } from "../templates/detailsTemplate.js";


export async function detailsHandler(ctx){
    let entry = await getSingleEntry(ctx.params["id"])
    let user = getUser()
    let dataEntry = await entry.json()
    if (getToken() && user._id == dataEntry._ownerId){
        ctx.render(detailsTemplateLoggedInOwner(ctx, dataEntry))
    }
    else if (getToken()){
        ctx.render(detailsTemplateLoggedIn(ctx, dataEntry))
    }
    else{
        ctx.render(detailsTemplateLoggedOut(ctx, dataEntry))
    }
}