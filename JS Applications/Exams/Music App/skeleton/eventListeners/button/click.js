export function onClick(func=undefined, validators=undefined, ctx=undefined, redirectPath=undefined){
    
    async function wrap(e){

        try{

            await func()

        }

        catch (error) {
            alert(error)
            return

        }

        if (ctx && redirectPath){
            ctx.page.redirect(redirectPath)
        }


    }
    return wrap
}