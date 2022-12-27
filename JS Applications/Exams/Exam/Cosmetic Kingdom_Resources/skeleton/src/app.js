import page from "../../node_modules/page/page.mjs";
import { createHandler } from "../handlers/createHandler.js";
import { homeHandler } from "../handlers/homeHandler.js";
import { loginHandler } from "../handlers/loginHandler.js";
import { logoutHandler } from "../handlers/logoutHandler.js";
import { registerHandler } from "../handlers/registerHandler.js";
import { renderNavbar } from "../middlewares/navbarRenderer.js";
import { attachRender } from "../middlewares/renderAttacher.js";
import { catalogHandler } from "../handlers/catalogHandler.js"
import { detailsHandler } from "../handlers/detailsHandler.js"
import { editHandler } from "../handlers/editHandler.js";
import { deleteHandler } from "../handlers/deleteHandler.js";

page(renderNavbar)
page(attachRender)

page("/", homeHandler)
page("/login", loginHandler)
page("/register", registerHandler)
page("/logout", logoutHandler)
page("/products", catalogHandler)
page("/products/add", createHandler)
page("/products/details/:id", detailsHandler)
page("/products/edit/:id", editHandler)
page("products/delete/:id", deleteHandler)

page.start()