import React, { useContext } from "react";
import classes from "./Cart.module.css";
import { createPortal } from "react-dom";
import CartItem from "../UI/CartItem/CartItem";
import { Modal, Button } from "antd";
import Meals from "../../store/meal-store";

const ModalWindow = () => {
  const { openCart, setOpenCart, state, addToCart, deleteItem } =
    useContext(Meals);
  const onAdd = (item) => {
    addToCart({ ...item, amount: 1 });
  };
  const onRemove = (id) => {
    deleteItem(id);
  };
  const totalAmount = `$${state.totalAmount.toFixed(2)}`;
  return (
    <Modal
      open={openCart}
      onCancel={() => setOpenCart(!openCart)}
      footer={[
        <div className={classes["total-amount"]}>
          <ul>
            <li>
              <h3>Total Amount</h3>
            </li>
            <li>{totalAmount}</li>
          </ul>
          <ul>
            <li>
              <Button
                type="dashed"
                onClick={() => setOpenCart(!openCart)}
                style={{
                  hover: {
                    backgroundColor: "black",
                  },
                }}
              >
                Cancel
              </Button>
            </li>
            <li>
              {state.items.length > 0 && (
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "brown",
                  }}
                >
                  Order
                </Button>
              )}
            </li>
          </ul>
        </div>,
      ]}
    >
      <h2>Your Cart</h2>
      <div className={classes.container}>
        {state.items.length === 0 ? (
          <h1>You did`t add some items</h1>
        ) : (
          state.items.map((item) => (
            <CartItem
              key={item.id}
              onAdd={onAdd.bind(null, item)}
              onRemove={onRemove.bind(null, item.id)}
              {...item}
            />
          ))
        )}
      </div>
    </Modal>
  );
};
export default function Cart() {
  return (
    <>
      {createPortal(<ModalWindow />, document.getElementById("modal-window"))}
    </>
  );
}
