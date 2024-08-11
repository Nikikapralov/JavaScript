import styles from "./Header.module.css"


export function Header(props){
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
            <span className={styles.course}>React Course - June 2022</span>
            <span className={styles.description}>User List Demo</span>
            </div>
        </header>
    )
}