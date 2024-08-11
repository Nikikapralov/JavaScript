
import { useNavigate } from "react-router-dom"

export async function handleSubmitForm(event, func, funcArgs){
    // A function to handle the submission of forms.
    // It has the ability to make an async server request, await the data, catch and display a potential error.
    // If required, it can also redirect after a successful request.
    event.preventDefault()
    try {
        const data = await func(...funcArgs)
        return data
    } catch (error) {
        return error
    }
}