import React, {Fragment} from "react"
import meals from "../../images/meals.jpg"
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton"

import styles from "./Header.module.css"

function Header({onShowCart}) {
    return <Fragment>
        <header className={styles.header} >
            <h1>Project Meals</h1>
            <HeaderCartButton onClick={onShowCart   } />
        </header>
        <div className={styles["main-image"]}>
            <img src={meals} alt="meals" />
        </div>
    </Fragment>
}

export default Header