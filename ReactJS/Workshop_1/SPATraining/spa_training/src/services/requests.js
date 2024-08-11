export async function request(url, params, setData, setError) {

try {
    let response = await fetch(url, params)
    if (!response.ok){
        console.log("error")
        console.log( await response.json())
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