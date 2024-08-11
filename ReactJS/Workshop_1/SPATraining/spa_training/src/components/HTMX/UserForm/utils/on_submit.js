import {requestCollection} from "../../../../services/requests"
import { buildKeyHistory, updateValueFromPath, depthFirstSearch } from "../../../../utils/utils"

var cloneDeep = require('lodash.clonedeep');

export async function handleSubmitForm(event, url, dataForm, setDataForm, errorForm){
    // Check for errors and submit the form.
    // Visualise any errors.
    event.preventDefault()

    try {
        if (!(depthFirstSearch(errorForm, false))){
            const data = await requestCollection.post(url, dataForm)
            if (data.success && data.data && typeof data.data === 'object') {
                let newObject = cloneDeep(dataForm)
                for (const [key, value] of Object.entries(data.data)){
                    let path = buildKeyHistory(data.data, key)
                    updateValueFromPath(newObject, path, value)
                }
                setDataForm(newObject)
            }
        }

    } catch (error) {
        console.log(error.message)
        return error
    }
}

export async function handleEditForm(event, url, dataForm, setDataForm, errorForm){
    // Submit the editted form and reupdate with the actual server response on screen.
    // Visualise any errors.
    event.preventDefault()

    try {
        if (!(depthFirstSearch(errorForm, false))){
            const data = await requestCollection.post(url, dataForm)
            if (data.success && data.data && typeof data.data === 'object') {
                let newObject = cloneDeep(dataForm)
                for (const [key, value] of Object.entries(data.data)){
                    let path = buildKeyHistory(data.data, key)
                    updateValueFromPath(newObject, path, value)
                }
                setDataForm(newObject)
            }
        }

    } catch (error) {
        console.log(error.message)
        return error
    }
}
