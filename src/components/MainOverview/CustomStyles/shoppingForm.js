import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    minWidth: "30px"
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: "16px",
    width: "207px",
    height: "50px",
    border: "1px solid black",
    padding: "13.7px 10px 13.7px 20px",
    borderRadius: 0
  },
  shareButton: {
    margin: theme.spacing(1),
    width: "50px",
    height: "50px",
    border: "1px solid black",
    marginLeft: "16px",
    borderRadius: 0,
    color: "rgb(119,119,119)"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectSize: {
    margin: theme.spacing(1),
    width: "170px",
    height: "50px",
    border: "1px solid black",
    padding: "10px 10px 10px 20px"
  },
  labelInput: {
    padding: "12px 0 12px 12px",
    color: "rgba(0, 0, 0, 0.55) !important"
  },
  selectQuantity: {
    margin: theme.spacing(1),
    marginLeft: 0,
    width: "100px",
    height: "50px",
    border: "1px solid black",
    padding: "10px;"
  }
}));
