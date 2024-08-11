import styles from "./UserForm.module.css"
import global_styles from "../../CSS/index.module.css"
import button_styles from "../../CSS/buttons.module.css"
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone"
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage"
import { faMap } from "@fortawesome/free-solid-svg-icons/faMap"
import { faCity } from "@fortawesome/free-solid-svg-icons/faCity"
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons/faHouseChimney"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { handleChange } from "../../../event_handlers/on_change"
import { handleOnBlur } from "../../../event_handlers/on_blur"
import { cityValidator, countryValidator, emailValidator, imageUrlValidator, nameValidator, phoneNumberValidator, streetNumberValidator, streetValidator } from "../../../validation/form_validations"
import { validateData } from "../../../validation/on_blur"
import { handleClose } from "../../../utils/modal_utils"
import { handleSubmitForm } from "../../../event_handlers/on_submit"
import { request } from "../../../services/requests"
import { USERS } from "../../../settings"



export function UserForm(props){
    // A controlled user form that handles data and data validation.
    
    let [dataForm, setDataForm] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "phone_number": "",
        "imageUrl": "",
        "address": {
          "country": "",
          "city": "",
          "street": "",
          "street_number": ""
        }
    })

    let [errorForm, setErrorForm] = useState({
      "first_name": false,
      "last_name": false,
      "email": false,
      "phone_number": false,
      "imageUrl": false,
      "address": {
        "country": false,
        "city": false,
        "street": false,
        "street_number": false
      }
    })

    let [serverErrorResponseForm, setServerErrorResponseForm] = useState({
      "first_name": "",
      "last_name": "",
      "email": "",
      "phone_number": "",
      "imageUrl": "",
      "address": {
        "country": "",
        "city": "",
        "street": "",
        "street_number": ""
      }
  })

    const stateFunction = props.stateFunction


 

    return (
        <div className={styles["user-container"]}>
          <header className={styles.headers}>
            <h2>{props.form_title}</h2>
            <button onClick={(e) => handleClose(e, stateFunction)} className={`${button_styles.close}`}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
          </header>
          <form onSubmit={props.submit_function}>
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label for="firstName">First name</label>
                <div className={styles["input-wrapper"]}>
                  <span><FontAwesomeIcon icon={faUser} /></span>
                  <input id="firstName" name="first_name" type="text" defaultValue={dataForm.first_name}
                  onBlur={(e) => handleOnBlur(e, validateData, [nameValidator, setErrorForm, errorForm])}
                  onChange={(e) => handleChange(e, setDataForm, dataForm)}/>
                </div>
                { errorForm.first_name ? <p className={styles["form-error"]}>
                  First name should be at least 3 characters long!
                </p> : null}
              </div>
              <div className={styles["form-group"]}>
                <label for="lastName">Last name</label>
                <div className={styles["input-wrapper"]}>
                <span><FontAwesomeIcon icon={faUser} /></span>
                  <input id="lastName" name="last_name" type="text" defaultValue={dataForm.last_name}
                  onBlur={(e) => handleOnBlur(e, validateData, [nameValidator, setErrorForm, errorForm])}
                  onChange={(e) => handleChange(e, setDataForm, dataForm)}/>
                </div>
                { errorForm.last_name ? <p className={styles["form-error"]}>
                  Last name should be at least 3 characters long!
                </p> : null}
              </div>
            </div>

            <div className={styles["form-row"]}>
            <div className={styles["form-group"]}>
                <label for="email">Email</label>
                <div className={styles["input-wrapper"]}>
                  <span><FontAwesomeIcon icon={faEnvelope} /></span>
                  <input id="email" name="email" type="text" defaultValue={dataForm.email}
                onChange={(e) => handleChange(e, setDataForm, dataForm)}
                onBlur={(e) => handleOnBlur(e, validateData, [emailValidator, setErrorForm, errorForm])}/>
                </div>
                { errorForm.email ? <p className={styles["form-error"]}>
                    Email is not valid!</p> : null}
              </div>
              <div className={styles["form-group"]}>
                <label for="phoneNumber">Phone number</label>
                <div className={styles["input-wrapper"]}>
                  <span><FontAwesomeIcon icon={faPhone} /></span>
                  <input id="phoneNumber" name="phone_number" type="text" defaultValue={dataForm.phone_number}
                onBlur={(e) => handleOnBlur(e, validateData, [phoneNumberValidator, setErrorForm, errorForm])}
                onChange={(e) => handleChange(e, setDataForm, dataForm)}/>
                </div>
                { errorForm.phone_number ? <p className={styles["form-error"]}>
                    Phone number is not valid!</p> : null}
              </div>
            </div>

            <div className={`${styles["form-group"]} ${styles["long-line"]}`}>
              <label for="imageUrl">Image Url</label>
              <div className={styles["input-wrapper"]}>
                <span><FontAwesomeIcon icon={faImage} /></span>
                <input id="imageUrl" name="imageUrl" type="text" defaultValue={dataForm.imageUrl}
            onBlur={(e) => handleOnBlur(e, validateData, [imageUrlValidator, setErrorForm, errorForm])}
            onChange={(e) => handleChange(e, setDataForm, dataForm)}/>
              </div>
              { errorForm.imageUrl ? <p className={styles["form-error"]}>
                ImageUrl is not valid!</p> : null}
            </div>

            <div className={styles["form-row"]}>
            <div className={styles["form-group"]}>
            <label for="country">Country</label>
              <div className={styles["input-wrapper"]}>
                <div className={styles["input-wrapper"]}>
                  <span><FontAwesomeIcon icon={faMap} /></span>
                  <input id="country" name="country" type="text" defaultValue={dataForm.address.country}
                onBlur={(e) => handleOnBlur(e, validateData, [countryValidator, setErrorForm, errorForm])}
                onChange={(e) => handleChange(e, setDataForm, dataForm)}/>
                </div>
              </div>
              { errorForm.address.country ? <p className={styles["form-error"]}>
                  Country should be at least 2 characters long!
                </p> : null}
              </div>
              <div className={styles["form-group"]}>
                <label for="city">City</label>
                <div className={styles["input-wrapper"]}>
                  <span><FontAwesomeIcon icon={faCity} /></span>
                  <input id="city" name="city" type="text" defaultValue={dataForm.address.city}
                onBlur={(e) => handleOnBlur(e, validateData, [cityValidator, setErrorForm, errorForm])}
                onChange={(e) => handleChange(e, setDataForm, dataForm)}/>
                </div>
                { errorForm.address.city ? <p className={styles["form-error"]}>
                  City should be at least 3 characters long!
                </p> : null}
              </div>
            </div>

            <div className={styles["form-row"]}>
            <div className={styles["form-group"]}>
                <label for="street">Street</label>
                <div className={styles["input-wrapper"]}>
                  <span><FontAwesomeIcon icon={faMap} /></span>
                  <input id="street" name="street" type="text" defaultValue={dataForm.address.street}
                onBlur={(e) => handleOnBlur(e, validateData, [streetValidator, setErrorForm, errorForm])}
                onChange={(e) => handleChange(e, setDataForm, dataForm)}/>
                </div>
                { errorForm.address.street ? <p className={styles["form-error"]}>
                  Street should be at least 3 characters long!
                </p> : null}
              </div>
              <div className={styles["form-group"]}>
                <label for="streetNumber">Street number</label>
                <div className={styles["input-wrapper"]}>
                  <span><FontAwesomeIcon icon={faHouseChimney} /></span>
                  <input id="streetNumber" name="street_number" type="text" 
                   defaultValue={dataForm.address.street_number}
                onBlur={(e) => handleOnBlur(e, validateData, [streetNumberValidator, setErrorForm, errorForm])}
                onChange={(e) => handleChange(e, setDataForm, dataForm)}/>
                </div>
                { errorForm.address.street_number ? <p className={styles["form-error"]}>
                  Street number should be a positive number!
                </p> : null}
              </div>
            </div>
            <div className={styles["form-actions"]}>
              <button onClick={(e) => handleSubmitForm(e, request, [USERS, {
                "method": "POST",
                "headers": { 'Content-Type': 'application/json' },
                "body": JSON.stringify(dataForm),
              }, setDataForm, setErrorForm])}
               className={`${styles.btn} ${button_styles.save} ${styles["action-save"]}`} type="submit" tabIndex={0}>Save</button>
              <button onClick={(e) => handleClose(e, stateFunction)}
               className={`${styles.btn} ${button_styles.cancel} ${styles["action-cancel"]}`} type="button" tabIndex={0}>
                Cancel
              </button>
            </div>
          </form>
        </div>
    )
    
}