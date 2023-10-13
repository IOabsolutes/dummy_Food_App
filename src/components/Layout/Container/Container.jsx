import React from "react";
import classes from "./Container.module.css";
import MealsSummary from "../MealsSummy/MealsSummary";
import MealItem from "../../UI/MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
export default function Container() {
  
  return (
    <div className={classes.container}>
      <MealsSummary />
      <div className={classes["items-container"]}>
        {DUMMY_MEALS.map((item) => (
          <MealItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
