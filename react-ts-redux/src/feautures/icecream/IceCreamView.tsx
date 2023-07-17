import { useState } from "react";
import { ordered, restocked } from "./iceCreamSlice";
import { useAppDispatch, useAppSelector } from "../../app/hook";

const IceCreamView = () => {
  const [value, setValue] = useState(1);

  const numOfICeCream = useAppSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>No of icecream - {numOfICeCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock icecream
      </button>
    </div>
  );
};

export default IceCreamView;
