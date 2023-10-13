import React, { createContext, useReducer, useState } from "react";

const Meals = createContext({
  items: [],
  totalAmount: 0,
  addToCart: (item) => {},
  deleteItem: (id) => {},
  openCart: false,
});
const initialState = {
  items: [],
  totalAmount: 0,
};
const addItemReducer = (state, action) => {
  switch (action.type) {
    case "AddItem":
      // Calculate the total amount by multiplying the price and amount of the item being added
      const updateTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      // Find the index of the existing item in the state.items array
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedItems;

      if (existingItemIndex !== -1) {
        // If the item already exists in state.items, update its amount
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };
        // Create a new array with the updated item
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        // If the item does not exist in state.items, add it to the array
        updatedItems = [...state.items, action.payload];
      }

      // Return a new state object with the updated items array and total amount
      return {
        ...state,
        items: updatedItems,
        totalAmount: updateTotalAmount,
      };

    case "RemoveItem":
      // Find the index of the item to be removed in the state.items array
      const isExist = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const itemToDelete = state.items[isExist];
      // Calculate the new total amount by subtracting the price of the item being removed
      const updatingAmount = state.totalAmount - itemToDelete.price;
      let uptodateItems;

      if (itemToDelete.amount > 1) {
        // If the item's amount is greater than 1, update its amount
        const updatedItem = {
          ...itemToDelete,
          amount: itemToDelete.amount - 1,
        };
        // Create a new array with the updated item
        uptodateItems = [...state.items];
        uptodateItems[isExist] = updatedItem;
      } else {
        // If the item's amount is 1, remove it from the array
        uptodateItems = state.items.filter(
          (item) => item.id !== action.payload
        );
      }
      // Return a new state object with the updated items array and total amount
      return {
        ...state,
        items: uptodateItems,
        totalAmount: updatingAmount,
      };
    default:
      return state;
  }
};

export function Mealstore(props) {
  const [openCart, setOpenCart] = useState(false);
  const [state, dispatch] = useReducer(addItemReducer, initialState);
  const addToCart = (item) => {
    dispatch({ type: "AddItem", payload: item });
  };
  const deleteItem = (id) => {
    dispatch({ type: "RemoveItem", payload: id });
  };

  return (
    <Meals.Provider
      value={{
        openCart,
        setOpenCart,
        addToCart,
        state,
        deleteItem,
      }}
    >
      {props.children}
    </Meals.Provider>
  );
}
export default Meals;
