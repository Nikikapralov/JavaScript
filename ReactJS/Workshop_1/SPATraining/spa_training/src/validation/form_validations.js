
export function emailValidator(email){
    // The Email should contain @ with atleast 3 character after it
    const LIMIT = 3
    if (!email.includes("@")){
        return false
    }
    let [firstPart, secondPart] = email.split("@")
    if (secondPart.length < LIMIT){
        return false
    }
    return true

}

export function nameValidator(name){
    // The First Name should be at least three characters
    // The Last name should be at least three characters
    const LIMIT = 3
    if (name.length < LIMIT){
        return false
    }
    return true

}

export function imageUrlValidator(imageUrl){
    // The ImageUrl should should start with https://
    const startWith = "https://"
    if (!imageUrl.startsWith(startWith)){
        return false
    }
    return true
}

export function phoneNumberValidator(phoneNumber){
    // The Phone nubmer should start with 0 and be 10 characters
    const TARGET = 10
    const startWith = 0
    if (!(phoneNumber.length == TARGET) || !(phoneNumber.startsWith(startWith))){
        return false
    }
    return true
}

export function countryValidator(country){
    // The Country should be at least two characters
    const LIMIT = 2
    if (country.length < LIMIT){
        return false
    }
    return true
}

export function streetValidator(street){
    // The Street should be at least three characters
    const LIMIT = 3
    if (street.length < LIMIT){
        return false
    }
    return true
}

export function streetNumberValidator(streetNumber){
    // The Street number must be a number larger than 0
    if (!Number.isFinite(Number(streetNumber))){
        return false
    }
    const TARGET = 0
    if (Number(streetNumber) <= TARGET){
        return false
    }
    return true
}

export function cityValidator(city){
    // The City should be at least three characters
    const LIMIT = 3
    if (city.length < LIMIT){
        return false
    }
    return true
}