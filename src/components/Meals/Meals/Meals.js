import React, {Fragment} from "react"

import AvailableMeals from "../AvailableMeals/AvailableMeals"
import MealsSumamry from "../MealsSummary/MealsSummary"

import styles from "./Meals.module.css"

function Meals(props) {
    return <Fragment>
        <MealsSumamry />
        <AvailableMeals />
    </Fragment>
}

export default Meals