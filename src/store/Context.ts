import React, { createContext, Dispatch } from "react";
import { ManifestResponse } from "../pages/Root/Root";
import { Action } from "./Actions";

export interface State {
  manifest?: ManifestResponse["photo_manifest"];
}

export const initialState: State = {
  manifest: undefined,
};

export const StateContext = createContext<State>(initialState);
export const DispatchContext = React.createContext<Dispatch<Action>>(
  (_value: Action): State => initialState
);
