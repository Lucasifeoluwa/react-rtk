import { configureStore } from "@reduxjs/toolkit";
//const reduxLogger = require("redux-logger");
import cakeReducer from "../feautures/cake/cakeSlice";
import iceCreamReducer from "../feautures/icecream/iceCreamSlice";
import userReducer from "../feautures/users/usersSLice";

//const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: [logger],
});

export default store;
