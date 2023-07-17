import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakeOrdered, restockedCake } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>No of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(cakeOrdered())}>Order Cake</button>
      <button onClick={() => dispatch(restockedCake(1))}>Restock Cake</button>
    </div>
  );
};

export default CakeView;
