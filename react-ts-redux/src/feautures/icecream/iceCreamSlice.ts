import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfIceCream: number;
};

const initialState: InitialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "ice-cream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, actions: PayloadAction<number>) => {
      state.numOfIceCream += actions.payload;
    },
  },
  /* extraReducers: {
    ["cake/ordered"]: (state) => {
      state.numOfIceCream--;
    },
  }, */

  /* extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCream--;
    });
  }, */
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
