import { Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { StateContext } from "../../store/Context";
import { useStyles } from "./Root.styles";

/* TODO in this file:
- Retrieve the photos data from the context state
- Create a slideshow according to document specification
- If no photos available the user should be redirected back to '/'
*/

const Slideshow = () => {
  const { manifest } = useContext(StateContext); // load data from the context api
  const history=useHistory(); // to go back to main page incase of no photo 
  const classes = useStyles(); 
  const [imgno, setimgno]=useState(1); // index of the images
  const mximgno=manifest?.length||0; // number of items in the list 
  const paths= manifest?.map((data) => data.img_src)||[]; // only get the paths out of the object


  const changeimg=(action:string)=>{
    if(action==="next"){ //check for the action next
      if (imgno===mximgno){ // maximum image reached start over
        setimgno(1);
      }else{ // next picture
        setimgno(imgno+1);
      }
    }else{//check for the action prev
      if (imgno===1){ //first picture reached, show the last one
        setimgno(mximgno);
      }else{ // previous pic
        setimgno(imgno-1);
      }
    }
  }

  if (mximgno===0){ // no pic available go back home
    history.push('/');
  }

  return (
    <div className={classes.rootcontainer}>
      <div className={classes.slideshow}>
        <Button
          classes={{ text: classes.button }}
          onClick={() => {
            changeimg("prev");
          }}
        >
          prev
        </Button>

          <img className={classes.images} src={paths[imgno-1]}/>
          
          <Button
          classes={{ text: classes.button }}
          onClick={() => {
            changeimg("next");
          }}
        >
          next
        </Button>     

      </div>
      <p className={classes.imgno}>{imgno} / {mximgno}</p>

    </div>
  );
};

export default Slideshow;
