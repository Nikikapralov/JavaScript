import { render, html } from "../node_modules/lit-html/lit-html.js";

export function renderNavbar(){
    let container = document.getElementById("nav-container")
    let user = getUser()
    let toRenderHTML = ''
    if (isLoggedIn()){
        toRenderHTML = html`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a @click=${renderHome} class="navbar-brand text-light" href="#">Movies</a>
        <ul class="navbar-nav ml-auto ">
            <li class="nav-item">
                <a class="nav-link">Welcome, ${user.email}</a>
            </li>
            <li class="nav-item">
                <a @click=${Logout} class="nav-link" href="#">Logout</a>
            </li>
        </ul>
        </nav>
        `
    }

    else{
        toRenderHTML = html`
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a @click=${renderHome} class="navbar-brand text-light" href="#">Movies</a>
        <ul class="navbar-nav ml-auto ">
            <li class="nav-item">
                <a @click=${RenderLogin} class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item">
                <a @click=${RenderRegister} class="nav-link" href="#">Register</a>
            </li>
        </ul>
        </nav>
        `
    }

    render(toRenderHTML, container)
}

function isLoggedIn(){
    let user = getUser()
    if (user == undefined){
        return false
    }
    return true
}

function getUser(){
    let user = localStorage.getItem("user")
    if (user == undefined){
        return undefined
    }
    return JSON.parse(user)
}

async function Logout(e){
    e.preventDefault()
    let user = getUser()
    try {
        await fetch(`http://localhost:3030/users/logout`, {
            method: 'POST',
            headers: {
                "X-Authorization": user.accessToken
            }
        })

        localStorage.removeItem("user")
        renderNavbar()
        renderHome()
    } 
    catch (error) {
      alert(error)  
    }

}

function RenderLogin(){
    let container = document.getElementById("main-container")
    let toRenderHTML = html`
        <section id="form-login">
        <form class="text-center border border-light p-5" action="" method="">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Email" name="email" value="">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password" name="password" value="">
            </div>

            <button @click=${Login} type="submit" class="btn btn-primary">Login</button>
        </form>
        </section>
    `
    render(toRenderHTML, container)
}

function RenderRegister(){
    let container = document.getElementById("main-container")
    let toRenderHTML = html`
    <section id="form-sign-up">
    <form class="text-center border border-light p-5" action="#" method="post">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
        </div>

        <button @click=${Register} type="submit" class="btn btn-primary">Register</button>
    </form>
    </section>
    `
    render(toRenderHTML, container)
}

async function Login(e){
    e.preventDefault()
    let emailElement = document.querySelector("#form-login [name=email]")
    let passwordElement = document.querySelector("#form-login [name=password]")

    let email = emailElement.value 
    let password = passwordElement.value

    if (email == "" || password == ""){
        alert("Please do not leave empty fields!")
        return 
    }

    let objectPOST = {
        email: email,
        password: password
    }

    try {
        let data = await fetch(`http://localhost:3030/users/login`, {
            method: `POST`,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(objectPOST)
        })

        let dataJSON = await data.json()
        localStorage.setItem("user", JSON.stringify({
            email: dataJSON.email,
            id: dataJSON._id,
            accessToken: dataJSON.accessToken,
        }))
    } 
    catch (error) {
        alert(error)
    }

    renderNavbar()
    renderHome()

}

async function Register(e){
    e.preventDefault()
    let emailElement = document.querySelector("#form-sign-up [name=email]")
    let passwordElement = document.querySelector("#form-sign-up [name=password]")
    let passwordConfirmElement = document.querySelector("#form-sign-up [name=repeatPassword]")


    let email = emailElement.value 
    let password = passwordElement.value
    let passConf = passwordConfirmElement.value 

    if (![email, passConf, password].every((entry) => entry != "")){
        alert("Please do not leave empty fields!")
        return 
    }

    if (password.length < 6){
        alert("Password must be longer than 6 symbols!")
        return
    }

    if (passConf != password){
        alert("Password and confirm password must be equal!")
        return
    }

    let objectPOST = {
        email: email,
        password: password
    }

    try {
        await fetch(`http://localhost:3030/users/register`, {
            method: `POST`,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(objectPOST)
        })

    } 
    catch (error) {
        alert(error)
    }

    RenderLogin()

}

export async function renderHome(){
    let toRenderHTML = ''
    let container = document.getElementById("main-container")
    let dataMoviesJSON = undefined
    try {
        let dataMovies = await fetch(`http://localhost:3030/data/movies`)
        dataMoviesJSON = await dataMovies.json()
    } 
    catch (error) {
       alert(error) 
    }

    if (isLoggedIn()){
        toRenderHTML = html`
        <section id="home-page">
            <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
                <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
                    class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px">
                <h1 class="display-4">Movies</h1>
                <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
            </div>
        </section>

        <h1 class="text-center">Movies</h1>

        <section id="add-movie-button">
            <a @click=${RenderAddMovie} href="#" class="btn btn-warning ">Add Movie</a>
        </section>

        <section id="movie">
        <div class=" mt-3 ">
            <div class="row d-flex d-wrap">
                <div class="card-deck d-flex justify-content-center">
                    ${Object.values(dataMoviesJSON).map((entry) => html`
                    <div class="card mb-4">
                        <img class="card-img-top" src="${entry.img}"
                             alt="Card image cap" width="400">
                        <div class="card-body">
                            <h4 class="card-title">${entry.title}</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#/details/6lOxMFSMkML09wux6sAF">
                                <button @click=${RenderDetails(entry._ownerId, entry._id, entry)} type="button" class="btn btn-info">Details</button>
                            </a>
                        </div>

                    </div>
                    `)}
                </div>
            </div>
        </div>
        </section>

                    `
        render(toRenderHTML, container)
    }
    else{
        toRenderHTML = html`
        <section id="home-page">
            <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
                <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
                    class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px">
                <h1 class="display-4">Movies</h1>
                <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
            </div>
        </section>

        <h1 class="text-center">Movies</h1>

        <section id="movie">
        <div class=" mt-3 ">
            <div class="row d-flex d-wrap">
                <div class="card-deck d-flex justify-content-center">
                ${Object.values(dataMoviesJSON).map((entry) => html`
                    <div class="card mb-4">
                        <img class="card-img-top" src="${entry.img}"
                             alt="Card image cap" width="400">
                        <div class="card-body">
                            <h4 class="card-title">${entry.title}</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#/details/6lOxMFSMkML09wux6sAF">
                                <button @click=${RenderDetails(entry._ownerId, entry._id, entry)} type="button" class="btn btn-info">Details</button>
                            </a>
                        </div>
                        `)}
                </div>
            </div>
        </div>
        </section>



        `
        render(toRenderHTML, container)
    }
}

function RenderDetails(ownerId, entryId, entry){
    async function wrap(e){
        let id = undefined
        let container = document.getElementById("main-container")
        let toRenderHTML = undefined
        let user = getUser()
        if (user != undefined){
            id = user.id
        }
        if (ownerId == id){
            toRenderHTML = html`
            <section id="movie-example">
        <div class="container">
            <div class="row bg-light text-dark">
                <h1>Movie title: ${entry.title}</h1>
    
                <div class="col-md-8">
                    <img class="img-thumbnail" src="${entry.img}"
                         alt="Movie">
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3 ">Movie Description</h3>
                    <p>${entry.description}</p>
                    <a @click=${Delete(entryId)} class="btn btn-danger" href="#">Delete</a>
                    <a @click=${RenderEdit(entryId, entry)} class="btn btn-warning" href="#">Edit</a>
                    <span class="enrolled-span">Liked 1</span>
                </div>
            </div>
        </div>
        </section>
            `
        }
        else{
            toRenderHTML = html`
                    <section id="movie-example">
        <div class="container">
            <div class="row bg-light text-dark">
                <h1>Movie title: ${entry.title}</h1>
    
                <div class="col-md-8">
                    <img class="img-thumbnail" src="${entry.img}"
                         alt="Movie">
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3 ">Movie Description</h3>
                    <p>${entry.description}</p>
                    <a class="btn btn-primary" href="#">Like</a>
                    <span class="enrolled-span">Liked 1</span>
                </div>
            </div>
        </div>
        </section>
            `
        }
    
        render(toRenderHTML, container)
    }
    return wrap

}

function RenderEdit(entryId, entry){
    async function wrap(e){
        e.preventDefault()
        let container = document.getElementById("main-container")
        let toRenderHTML = html`
         <section id="edit-movie">
            <form class="text-center border border-light p-5" action="#" method="">
                <h1>Edit Movie</h1>
                <div class="form-group">
                    <label for="title">Movie Title</label>
                    <input type="text" class="form-control" placeholder="Movie Title" value="${entry.title}" name="title">
                </div>
                <div class="form-group">
                    <label for="description">Movie Description</label>
                    <textarea class="form-control" placeholder="Movie Description..." name="description">${entry.description}</textarea>
                </div>
                <div class="form-group">
                    <label for="imageUrl">Image url</label>
                    <input type="text" class="form-control" placeholder="Image Url" value="${entry.img}" name="imageUrl">
                </div>
                <button @click=${Edit(entryId)} type="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
        `
    render(toRenderHTML, container)
    }
    return wrap
}

function Edit(entryId){
    async function wrap(e){
        e.preventDefault()
        let titleElement = document.querySelector("#edit-movie [name=title]")
        let descriptionElement = document.querySelector("#edit-movie [name=description]")
        let imageUrlElement = document.querySelector("#edit-movie [name=imageUrl]")

        let title = titleElement.value 
        let description = descriptionElement.value
        let img = imageUrlElement.value
        
        if (![title, description, img].every((entry) => entry != "")){
            alert("Please fill out all fields!")
            return
        }

        let objectPOST = {
            title: title, 
            description: description,
            img: img,
        }

        try {
            await fetch(`http://localhost:3030/data/movies/${entryId}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application-json",
                    "X-Authorization": getUser().accessToken
                },
                body: JSON.stringify(objectPOST)
            })
        } 
        catch (error) {
           alert(error) 
        }

        renderHome()

    }
    return wrap
}

function Delete(entryId){
    async function wrap(e){
        e.preventDefault()
        try {
            await fetch(`http://localhost:3030/data/movies/${entryId}`, {
                method: "DELETE",
                headers: {
                    "X-Authorization": getUser().accessToken
                }
            })
        } 
        catch (error) {
          alert(error)  
        }
        renderHome()
    }
    return wrap
}

function Like(entryId){
    async function wrap(e){
        e.preventDefault()
    }
    return wrap
}

function RenderAddMovie(e){
    e.preventDefault()
    let container = document.getElementById("main-container")
    let toRenderHTML = html`
     <section id="add-movie">
        <form class="text-center border border-light p-5" action="#" method="">
            <h1>Add Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input type="text" class="form-control" placeholder="Title" name="title" value="">
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Description" name="description"></textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
            </div>
            <button @click=${Submit} type="submit" class="btn btn-primary">Submit</button>
        </form>
    </section>
    `
    render(toRenderHTML, container)
}

async function Submit(e){
    e.preventDefault()
    let titleElement = document.querySelector("#add-movie [name=title]")
    let descriptionElement = document.querySelector("#add-movie [name=description]")
    let imageURLElement = document.querySelector("#add-movie [name=imageUrl]")

    let title = titleElement.value
    let description = descriptionElement.value
    let imageUrl = imageURLElement.value

    if (![title, description, imageUrl].every((entry) => entry != "")){
        alert("Please fill out all fields!")
        return
    }

    let objectPOST = {
        title: title, 
        description: description,
        img: imageUrl
    }

    try {
        await fetch("http://localhost:3030/data/movies", {
            method: "POST",
            headers: {
                "content-type": "application-json",
                "X-Authorization": getUser().accessToken
            },
            body: JSON.stringify(objectPOST)
        })
    } 
    catch (error) {
       alert(error) 
    }

    renderHome()
}