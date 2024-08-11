import styles from "./SearchBar.module.css"
import global_styles from "../../CSS/index.module.css"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export function SearchBar(props){
    let [criteria, setCriteria] = useState("Not selected")

    function updateCriteria(event){
        setCriteria(event.target.value)
    }


    return (
      <form className={styles["search-form"]}>
          <h2>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span>Users</span>
          </h2>
          <div className={styles["search-input-container"]}>
            <input type="text" placeholder="Please, select the search criteria" name="search" />
            <button className={`${global_styles.btn} ${styles["close-btn"]}`}>
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <button className={global_styles.btn} title="Please, select the search criteria">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

          <div className={styles.filter}>
            <span>Search Criteria:</span>
            <select name="criteria" className={styles.criteria} defaultValue={criteria} onChange={updateCriteria}>
              <option defaultValue="Not selected">Not selected</option>
              <option defaultValue="First name">First Name</option>
              <option defaultValue="Last name">Last Name</option>
              <option defaultValue="Email">Email</option>
              <option defaultValue="Phone">Phone</option>
            </select>
          </div>
      </form>
    )
}