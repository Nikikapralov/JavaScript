

export function onSubmit(func=undefined, validators=undefined, ctx=undefined, redirectPath=undefined){

    async function wrap(e){

        e.preventDefault()

        let data = Object.fromEntries(new FormData(e.currentTarget))

        try{
            
            if (validators){
                if (validators.some((validator) => validator(data) == false)){
                    return
                }
    
            }
            await func(data)
            if (ctx && redirectPath){
                ctx.page.redirect(redirectPath)
            }
    
        }
        

        catch (error) {
            alert(error)
            return

        }

    }

    return wrap 
}   
