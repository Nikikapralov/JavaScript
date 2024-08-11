export async function request(url, params, setData, setError) {

try {
    let response = await fetch(url, params)
    if (!response.ok){
        console.log("error")
        throw Error("Error encountered")
    }
    console.log(url, params, setData, setError)
    let data = await response.json()
    console.log(data)
    setData(data)
} 
catch (error) {
    let data = await error.json()
    setError(data)
}
}


export async function post(url, data, params=null){
    if (params == null){
        params = {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify(data),
        }
    }   


        let response = await fetch(url, params)
        if (!response.ok){
            let errorData = await response.json()
            return {"data": "", "error": errorData, "success": false} 
        }
    
        let responseData = await response.json()
        return {"data": responseData, "error": null, "success": true} 
}

export async function get(url, params=null){
    if (params == null){
        params = {
            "method": "GET",
        }
    }


    let response = await fetch(url, params)
    if (!response.ok){
        let errorData = await response.json()
        return {"data": "", "error": errorData, "success": false} 
    }

    let responseData = await response.json()
    return {"data": responseData, "error": null, "success": true} 
}

export const requestCollection = {
    "request": request,
    "post": post,
    "get": get}