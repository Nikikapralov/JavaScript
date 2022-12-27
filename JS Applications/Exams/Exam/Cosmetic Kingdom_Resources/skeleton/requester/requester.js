import { getToken } from "../services/auth.js"

async function request(method, url, data, mustAuthorize=false){

    let options = {}

    options.headers = {
        "content-type": "application/json"
    }

    if (method != "GET"){
        options.body = JSON.stringify(data)
        options.method = method
    }

    if (mustAuthorize){
        options.headers["X-Authorization"] = getToken()
        }

    try{
        let fetchedData = await fetch(url, options)

        return fetchedData
    }

    catch (error){
        throw new Error(error)
    }

}

export const get = request.bind(null, "GET")
export const post = request.bind(null, "POST")
export const put = request.bind(null, "PUT")
export const patch = request.bind(null, "PATCH")
export const del = request.bind(null, "DELETE")
