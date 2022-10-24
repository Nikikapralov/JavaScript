function emailChecker(input){
    let regex = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g
    let emails = Array.from(input.match(regex))
    return emails.join("\n")
}

let input = "Please contact us at: support@github.com."
let input_2 = "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information."
let input_3 = "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de."
console.log(emailChecker(input))
console.log(emailChecker(input_2))
console.log(emailChecker(input_3))