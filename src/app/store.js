import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../features/counter/counterSlice";
import lookupReducer from "../features/lookup/lookupSlice";
import lookupSaga from "../features/lookup/lookupSaga";
import logger from "redux-logger"

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lookup: lookupReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(lookupSaga)