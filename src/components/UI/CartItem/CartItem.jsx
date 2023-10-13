import React from "react";
import classes from "./CartItem.module.css";
import { Button, Card } from "antd";
export default function CartItem({ price, name, amount, id, onAdd, onRemove }) {
  return (
    <Card id={id} title={name} className={classes["cart-item"]}>
      <div className={classes["cart-options"]}>
        <ul>
          <li>
            <b>${price}</b>
          </li>
          <li>X{amount}</li>
        </ul>
        <ul>
          <li>
            <Button onClick={onRemove} size="medium" shape="circle">
              -
            </Button>
          </li>
          <li>
            <Button
              onClick={onAdd}
              size="medium"
              shape="circle"
            >
              +
            </Button>
          </li>
        </ul>
      </div>
    </Card>
  );
}
