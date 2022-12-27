import * as request from "../requester/requester.js"
import { loginUrl, logoutUrl, registerUrl } from "../settings.js"
import { responseOk } from "../validators/responseValidators.js"

export function getToken(){
    let user = getUser()
    if (!user){
        return undefined
    }
    let token = user["accessToken"]
    return token
}

export function getUser(){
    let user = localStorage.getItem("user")
    if (!user){
        return undefined
    }
    return JSON.parse(user)
}

export function saveUser(userData){
    localStorage.setItem("user", userData)
}

export function clearUser(){
    localStorage.removeItem("user")
}


export async function login(data){

    try{
        let response = await request.post(loginUrl, data, false)

        if (!responseOk(response)){
            throw new Error(response.message)
        } 
        
        let user = await response.json()

        saveUser(JSON.stringify(user))
    }
    catch (error){
       throw new Error(error)
    }
}

export async function logout(data){
    try{
        await request.get(logoutUrl, data, true)
        clearUser()
    }

    catch (error){
        throw new Error(error)
    }
}

export async function register(data){

    try{
        let response = await request.post(registerUrl, data, false)

        if (!responseOk(response)){
            return
        }

        let user = await response.json()

        saveUser(JSON.stringify(user))
    }

    catch (error) {
        throw new Error(error)
    }

}

