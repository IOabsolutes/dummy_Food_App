import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import Input from "../Input/Input";
import Meals from "../../../store/meal-store";
export default function MealItem({ name, description, price, id }) {
  const { addToCart } = useContext(Meals);
  const getAmount = (amount) => {
    addToCart({ name, price, description, id, amount });
  };
  return (
    <div className={classes["meal-card"]}>
      <ul className={classes["meal-info"]}>
        <li>
          <b>{name}</b>
        </li>
        <li>
          <i>{description}</i>
        </li>
        <li>
          <b>${price}</b>
        </li>
      </ul>
      <ul className={classes["inputs-fields"]}>
        <Input
          getAmount={getAmount}
          input={{
            id: "amount_" + id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
      </ul>
    </div>
  );
}
