import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  title: {
    color: "#000000",
  },
  containerHome: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 20,
    width: "100%",
    height: "80vh",
  },
  perfilImg: {
    width: "370px",
  },
  image: {
    borderRadius: "50%",
    height: "370px",
  },
  textContainer: {
    width: "50%",
    textAlign: "center",
  },

  //services styles
  servicesImgDiv: {
    outline: "2px solid red",
    position: "relative",
  },
  serviceImg: {},
  servicesTitle: {
    outline: "2px solid blue",

    position: "absolute",
    top: 0,
    right: 0,
  },
});
