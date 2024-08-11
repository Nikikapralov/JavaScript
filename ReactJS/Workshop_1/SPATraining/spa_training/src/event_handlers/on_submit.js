import {requestCollection} from "../services/requests"


export async function handleSubmitForm(event, url, dataForm){
    // A function to handle the submission of forms.
    // It has the ability to make an async server request, await the data, catch and display a potential error.
    // If required, it can also redirect after a successful request.
    event.preventDefault()
    try {
        const data = await requestCollection.post(url, dataForm)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}