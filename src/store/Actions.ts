import { ManifestResponse } from "../pages/Root/Root";

// action types
const SET_MANIFEST = "SET_MANIFEST" as const;

// action functions
const setManifest = (manifest: ManifestResponse["photos"]) => ({
  type: SET_MANIFEST,
  payload: manifest,
});

// export action types
export { SET_MANIFEST };

// export action functions
export { setManifest };

// Export typings
export type Action = ReturnType<typeof setManifest>;
