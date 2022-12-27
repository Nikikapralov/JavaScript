import { getToken } from "../services/auth.js"
import { getAllEntries } from "../services/entries.js"
import { getEntriesUrl } from "../settings.js"
import { catalogTemplateLoggedIn, catalogTemplateLoggedOut } from "../templates/catalogTemplate.js"

export async function catalogHandler(ctx){
    let url = getEntriesUrl

    try{
        let entries = await getAllEntries(url)

        if (getToken()){
            ctx.render(catalogTemplateLoggedIn(entries))
        }

        else{
            ctx.render(catalogTemplateLoggedOut(entries))
        }
    }

    catch (error){
        alert(error)
    }
}