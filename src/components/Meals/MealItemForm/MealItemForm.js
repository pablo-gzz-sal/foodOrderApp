import React, { useRef, useState } from "react";

import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

function MealItemForm(props) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);


  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    console.log(enteredAmountNumber)

    props.onAddCart(enteredAmountNumber)

  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid number (1 - 5)</p>}
    </form>
  );
}

export default MealItemForm;
