import React, { useRef } from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  const amountRef = useRef();
  const Submit = (e) => {
    e.preventDefault();
    const Amount = amountRef.current.value;
    const AmountNum = +Amount;
    props.getAmount(AmountNum);
  };
  return (
    <form onSubmit={Submit} className={classes["meal-input"]}>
      <div className={classes["meal-input"]}>
        <label>Amount</label>
        <input ref={amountRef} {...props.input} />

        <button type="submit">+Add</button>
      </div>
    </form>
  );
};
export default Input;
