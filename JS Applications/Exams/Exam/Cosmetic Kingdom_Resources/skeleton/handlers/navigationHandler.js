import { navbarTemplateLogged, navbarTemplateNotLogged } from "../templates/navbarTemplate.js";
import { getToken } from "../services/auth.js"

export function navigationHandler(ctx){
    if (getToken()){
        return navbarTemplateLogged(ctx)
    }
    return navbarTemplateNotLogged(ctx)
}