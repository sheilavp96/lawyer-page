import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  title: {
    color: "red",
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
    width: "350px",
  },
  image: {
    borderRadius: "50%",
  },
  text: {
    textAlign: "center",
  },
});
