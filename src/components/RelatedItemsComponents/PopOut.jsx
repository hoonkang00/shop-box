import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1),
    position: "absolute"
  }
}));

export default function PopOut(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  let data = {};
  let dataArr = [];

  if (props.currentProduct && props.relatedProduct) {
    props.currentProduct.features.forEach(item => {
      data[item.feature] = {
        cP: item.value || "",
        rP: ""
      };
    });

    props.relatedProduct.features.forEach(item => {
      if (!data[item.feature]) {
        data[item.feature] = {
          cP: "",
          rP: item.value
        };
      } else {
        data[item.feature].rP = item.value;
      }
    });
    for (let feature in data) {
      let current = data[feature].cP;
      let related = data[feature].rP;
      dataArr.push([feature, current, related]);
    }
  }

  return (
    <div className={"PopOut"}>
      <IconButton
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <StarBorderIcon htmlColor="blanchedalmond" filled={true}/>
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Paper>
          <Typography>COMPARING</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">{props.currentProduct.name}</TableCell>
                <TableCell align="center">FEATURES</TableCell>
                <TableCell align="right">{props.relatedProduct.name}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataArr.map(item => { 
                let leftDescription = item[1] !== "null" ? item[1] : "";
                let rightDescription = item[2] !== "null" ? item[2] : "";

                if (!(leftDescription === "" && rightDescription === "")) {
                  return (
                    <TableRow key={item}>
                      <TableCell align="left">
                        <Typography>
                          {item[1] !== "null" ? item[1] : ""}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography>{item[0]}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>
                          {item[2] !== "null" ? item[2] : ""}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </Paper>
      </Popover>
    </div>
  );
}
