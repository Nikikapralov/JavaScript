class Contact{
    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNumber = phoneNumber
        this.email = email
        this._online = false
        this.divTitle = undefined
    }

    render(id){
        let elementWithId = document.getElementById(id)
        let newArticle = document.createElement("article")
        let newDivTitle = document.createElement("div")
        this.divTitle = newDivTitle
        this.divTitle.classList.add("title")
        newDivTitle.textContent = `${this.firstName} ${this.lastName}`
        let newButton = document.createElement("button")
        newButton.textContent = 'ℹ'
        let newDivInfo = document.createElement("div")
        newDivInfo.classList.add("info")
        newDivInfo.style.display = "none"
        let newSpanPhone = document.createElement("span")
        newSpanPhone.textContent = `☎ ${this.phoneNumber}`
        let newSpanEmail = document.createElement("span")
        newSpanEmail.textContent = `✉ ${this.email}`


        newDivInfo.appendChild(newSpanPhone)
        newDivInfo.appendChild(newSpanEmail)
        newDivTitle.appendChild(newButton)
        newArticle.appendChild(newDivTitle)
        newArticle.appendChild(newDivInfo)

        elementWithId.appendChild(newArticle)

        newButton.addEventListener("click", function(e){
            if (newDivInfo.style.display == "none"){
                newDivInfo.style.display = "block"
            }
            else{
                newDivInfo.style.display = "none"
            }
        })
    }

    set online(value){
        if (value == true){
            try{
                this.divTitle.classList.add("online")
            }
            catch (error) {
                let nothing = 1
            }

            this._online = true
        }
        else{
            try{
                this.divTitle.classList.("online")
            }
            catch (error) {
                let nothing = 1
            }
            this._online = false
        }
    }

    get online(){
        return this._online
    }
}


console.log("hello")
let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);

  