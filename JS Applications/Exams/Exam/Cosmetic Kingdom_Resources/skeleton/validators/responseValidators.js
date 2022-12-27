export function responseOk(response){
    if (response.code == 403){
        return false
    }

    if (response.code == 204){
        return false
    }

    return true
}