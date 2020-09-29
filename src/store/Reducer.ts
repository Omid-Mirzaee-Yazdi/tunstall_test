import { SET_MANIFEST, Action } from "./Actions";
import { produce } from "immer";
import { State } from "./Context";

export const reducer = (state: State, action: Action): State =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_MANIFEST:
        draft.manifest = action.payload;
        break;
      default:
        throw new Error("No matching type");
    }
  });
