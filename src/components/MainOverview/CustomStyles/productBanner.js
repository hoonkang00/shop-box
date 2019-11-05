import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minWidth: "500px",
    maxWidth: "1100px",
    height: "max-content"
  },
  features: {
    borderLeft: "2px solid black"
  }
}));
