import styles from "./Page_container.module.css"
import { Header } from "../General/Header/Header"
import { SearchBar } from '../SearchBar/SearchBar'
import { MainContent } from "../MainContent/MainContent"
import { Footer } from "../General/Footer/Footer"
import { UserForm } from "../UserForm/UserForm"

export function Page_container(){
    return(
     <div className={styles.page_container}>
        <div className={styles.content_wrap}>
            <Header></Header>
            <MainContent></MainContent>
            <Footer></Footer>
        </div>
    </div>)
}