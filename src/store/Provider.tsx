import React, { useReducer } from "react";
import { reducer } from "./Reducer";
import { initialState, StateContext, DispatchContext } from "./Context";

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

function withContextProvider<T>(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => (
    <ContextProvider>
      <WrappedComponent {...props} />
    </ContextProvider>
  );
}

export { withContextProvider };
export { ContextProvider };
