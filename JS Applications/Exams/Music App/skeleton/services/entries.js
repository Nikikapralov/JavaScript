import * as request from "../requester/requester.js"
import { createEntryUrl } from "../settings.js"
import { responseOk } from "../validators/responseValidators.js"

export async function getAllEntries(url){
    try{
        let entries = await request.get(url)

        if (!responseOk){
            throw new Error("Empty body")
        }

        let entriesJSON = await entries.json()
        
        return entriesJSON
    }

    catch (error) {
        alert(error)
    }

}


export async function getSingleEntry(url){

}

export async function createEntry(data, url=createEntryUrl){
    try {
        await request.post(url, data, true)
    } catch (error) {
        throw new Error(error)
    }

}

export async function deleteEntry(url){

}

export async function editEntry(url){

}