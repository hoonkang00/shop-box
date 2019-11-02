import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  top: {
    flexGrow: 1,
    minWidth: "500px",
    maxWidth: "1100px",
    height: "max-content",
    marginBottom: "20px"
  },
  defaultLeft: {
    minHeight: "600px",
    maxHeight: "700px",
    overflow: "hidden"
  },
  defaultRight: {
    height: "max-content",
    display: "flex",
    flexDirection: "column"
  },
  bottom: {
    flexGrow: 1,
    minWidth: "500px",
    maxWidth: "1100px",
    height: "max-content"
  },
  bottomRight: {
    borderLeft: "2px solid black"
  }
}));
