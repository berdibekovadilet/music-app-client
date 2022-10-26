import { createStore, AnyAction, Store, applyMiddleware } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import { reducer, RootState } from "./reducers";
import thunk, { ThunkDispatch } from "redux-thunk";

export interface State {
  tick: string;
}

// create a makeStore function
const makeStore = (context: Context) =>
  createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

