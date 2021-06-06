import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(() => ({
  rootcontainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    position: "relative",
    background: "gray",
    alignItems: "center",
  },

  images: {
    width:"100%",
    height:"100%",
    objectFit: "contain",
  },

  slideshow:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  imgno:{
    backgroundColor: "#0000FF48",
    color: "white",
    marginTop: "-25px",
  },
  button: {
    "&.MuiButton-root": {
      backgroundColor: "#0000FF48",
      color: "white",
      width: "200px",
    },
  },
}));
