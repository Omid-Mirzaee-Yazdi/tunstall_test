import React, { useContext, useEffect } from "react";
import axios from "axios";
import { StateContext, DispatchContext } from "../../store/Context";
import { setManifest } from "../../store/Actions";
import { useStyles } from "./Root.styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

/* TODO in this file:
- Declare the type for the photos response (see type ManifestResponse for help)
- Fetch photos taken by the curiosity rover at 2020-09-27 (earth date) (API docs: https://api.nasa.gov/index.html)
- Utilize context to dispatch the photo data from the request to NASA (the store can be found in src/store)
- "Show slideshow" button should be hidden when no photos data is available
*/

export type ManifestResponse = {
  photo_manifest: {
    landing_date: string;
    launch_date: string;
    max_date: string;
    max_sol: number;
    name: string;
    photos: Array<{
      cameras: string[];
      earth_date: string;
      sol: number;
      total_photos: number;
    }>;
    status: string;
    total_photos: number;
  };
};

const Root = () => {
  const { manifest } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const history = useHistory();
  const classes = useStyles();

  const API_KEY = "See doc";

  useEffect(() => {
    (async () => {
      const {
        data: { photo_manifest },
      } = await axios.get<ManifestResponse>(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity?api_key=${API_KEY}`
      );
      dispatch(setManifest(photo_manifest));
    })();
  }, [dispatch]);

  return (
    <div className={classes.rootcontainer}>
      {manifest && <h1>{`${manifest.name} is ${manifest.status}!`}</h1>}
      <Button
        classes={{ text: classes.button }}
        onClick={() => {
          history.push("/slideshow");
        }}
      >
        Show slideshow
      </Button>
    </div>
  );
};

export default Root;
