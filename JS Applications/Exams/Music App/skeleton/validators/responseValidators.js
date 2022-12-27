export function responseOk(response){
    if (response.code == 403){
        throw new Error(response.message)
    }

    if (response.code == 204){
        return false
    }

    return true
}