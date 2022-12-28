import { getUser } from "./utils.js"

let logoutButton = document.getElementById("logoutBtn")

logoutButton.addEventListener("click", async function(e){
    try {
       await fetch("http://localhost:3030/users/logout", {
        method: "GET",
        headers: {
            "X-Authorization": getUser().accessToken
        }
       })
       
       localStorage.removeItem("user")
    } 
    catch (error) {
       alert(error) 
    }

    window.location.replace("home.html")
})