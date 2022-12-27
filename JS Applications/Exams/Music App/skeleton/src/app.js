import page from "../../node_modules/page/page.mjs";
import { catalogHandler } from "../handlers/catalogHandler.js";
import { createHandler } from "../handlers/createHandler.js";
import { detailsHandler } from "../handlers/detailsHandler.js";
import { homeHandler } from "../handlers/homeHandler.js";
import { loginHandler } from "../handlers/loginHandler.js";
import { logoutHandler } from "../handlers/logoutHandler.js";
import { registerHandler } from "../handlers/registerHandler.js";
import { searchHandler } from "../handlers/searchHandler.js";
import { renderNavbar } from "../middlewares/navbarRenderer.js";
import { attachRender } from "../middlewares/renderAttacher.js";

page(renderNavbar)
page(attachRender)

page("/", homeHandler)
page("/catalog", catalogHandler)
page("/login", loginHandler)
page("/search", searchHandler)
page("/register", registerHandler)
page("/logout", logoutHandler)
page("/create", createHandler)
page("/albums/:id", detailsHandler)



page.start()