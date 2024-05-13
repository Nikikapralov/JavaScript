import styles from "./Page_container.module.css"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export function Page_container(){
    return(
     <div className={styles.page_container}>
        <div className={styles.content_wrap}>
            <Header></Header>
            <Footer></Footer>
        </div>
    </div>)
}