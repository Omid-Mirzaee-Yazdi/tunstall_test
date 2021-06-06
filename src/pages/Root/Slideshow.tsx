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
  const { manifest } = useContext(StateContext);
  const history=useHistory();
  const classes = useStyles();
  const [imgno, setimgno]=useState(1);
  const mximgno=manifest?.length||0;
  const paths= manifest?.map((data) => data.img_src)||[];


  const changeimg=(action:string)=>{
    if(action==="next"){
      if (imgno===mximgno){
        setimgno(1);
      }else{
        setimgno(imgno+1);
      }
    }else{
      if (imgno===1){
        setimgno(mximgno);
      }else{
        setimgno(imgno-1);
      }
    }
  }

console.log(typeof manifest)
  if (mximgno===0){
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

          <img className={classes.images} src={paths[imgno]}/>
          
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
