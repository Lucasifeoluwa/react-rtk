import { cakeOrdered, restockedCake } from "./cakeSlice";

import { useAppDispatch, useAppSelector } from "../../app/hook";

const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>No of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(cakeOrdered())}>Order Cake</button>
      <button onClick={() => dispatch(restockedCake(1))}>Restock Cake</button>
    </div>
  );
};

export default CakeView;
