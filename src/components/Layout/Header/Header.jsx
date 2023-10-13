import React, { useContext, useEffect, useState } from "react";
import classes from "./Header.module.css";
import Meals from "../../../store/meal-store";
export default function Header() {
  const { setOpenCart, state } = useContext(Meals);

  const amountInCart = state.items.reduce((curItems, meal) => {
    return curItems + meal.amount;
  }, 0);
  const [triggerd, setTriggerd] = useState(false);
  useEffect(() => {
    if (state.items.length === 0) return;
    if (state.items) setTriggerd(true);
    const timer = setTimeout(() => {
      setTriggerd(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [state.items]);
  return (
    <>
      <header className={classes.header}>
        <ul>
          <li>
            <h1>React Meals</h1>
          </li>
          <li>
            <button
              id="button"
              className={classes[triggerd ? "animated-button" : ""]}
              onClick={() => setOpenCart(true)}
            >
              🛒 <span>Your Cart</span> <span>{amountInCart}</span>
            </button>
          </li>
        </ul>
      </header>
      <div className={classes["main-image"]}>
        <img src="/assets/meals.jpg" alt="meals.jpg" />
      </div>
    </>
  );
}
