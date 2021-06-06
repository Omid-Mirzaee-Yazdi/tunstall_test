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
  photos: Array<{
    id: number;
    sol: number;
    img_src: string;
    earth_date: string;
    camera: {
      id: number;
      name: string;
      rover_id: number;
      full_name: string;
    };
    rover:  {
      id: number;
      name: string;
      landing_date: string;
      launch_date: string;
      status: string;
    };
  }>;
};

const Root = () => {
  const { manifest } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const history = useHistory();
  const classes = useStyles();

  const API_KEY = "7JPxXLG7jt4HrODSGLDRJvhVFYgle7bfn665ZpOc";

  useEffect(() => {
    (async () => {
      const {
        data: { photos },
      } = await axios.get<ManifestResponse>(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-09-27&api_key=${API_KEY}`
      );
      dispatch(setManifest(photos));
    })();
  }, [dispatch]);

  return (
    <div className={classes.rootcontainer}>
      {manifest && <h1>{`Lets see Mars on ${manifest[0]?.earth_date}!`}</h1>}
      
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
