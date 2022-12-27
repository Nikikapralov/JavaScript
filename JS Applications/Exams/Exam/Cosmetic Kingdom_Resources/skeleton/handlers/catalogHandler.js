import { getToken } from "../services/auth.js"
import { getAllEntries } from "../services/entries.js"
import { getEntriesUrl } from "../settings.js"
import { catalogTemplate} from "../templates/catalogTemplate.js"

export async function catalogHandler(ctx){
    let url = getEntriesUrl

    try{
        let entries = await getAllEntries(url)
        ctx.render(catalogTemplate(ctx, entries))
    }

    catch (error){
        alert(error)
    }
}