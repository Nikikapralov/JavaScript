import styles from "./Modal.module.css"
import { handleClose } from "../../utils/modal_utils"

export function Modal(props){
    const Component = props.component 
    const stateFuntion = props.stateFunction

    return (
        <div className={styles.overlay} onClick={(e) => handleClose(e, stateFuntion)}>
        <div className={styles.backdrop}></div>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <Component {...props.componentProps}></Component>
        </div>
    </div>
    )
}