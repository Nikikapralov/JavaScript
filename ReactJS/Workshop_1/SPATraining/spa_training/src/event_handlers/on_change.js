import { buildKeyHistory, buildNewObjectTreeLike } from "../utils/utils"

export function handleChange(event, setUpdateFormStatus,  formData){
    // A function to handle controlled form elements when they change by user input.
    // Get the name and the value and update it as soon as it changes so that it is visible on display.
    const NAME = event.target.name
    const VALUE = event.target.value
    let path = buildKeyHistory(formData, NAME)
    setUpdateFormStatus((previousFormStatus) => buildNewObjectTreeLike(previousFormStatus, VALUE, path))
}