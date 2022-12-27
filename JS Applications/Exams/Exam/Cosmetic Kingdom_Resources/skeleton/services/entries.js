import * as request from "../requester/requester.js"
import { createEntryUrl, deleteEntryUrl, editEntryUrl, getSingleEntryUrl } from "../settings.js"
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


export async function getSingleEntry(id){
    try {
        let entry = await request.get(`${getSingleEntryUrl}/${id}`, undefined)
        return await entry
    } catch (error) {
        throw new Error(error)
    }
}

export async function createEntry(data, url=createEntryUrl){
    try {
        await request.post(url, data, true)
    } catch (error) {
        throw new Error(error)
    }

}

export async function deleteEntry(id){
    data = {}
    try {
        await request.del(`${deleteEntryUrl}/${id}`, data, true)
    } catch (error) {
        throw new Error(error)
    }
}

export async function editEntry(id, data){
    try {
        console.log(id, url)
        let url = `${editEntryUrl}/${id}`
        let result = await request.put(url, data, true)
    } catch (error) {
        throw new Error(error)
    }
}