import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

function createData(name, value1, value2, value3, value4, value5) {
  return { name, value1, value2, value3, value4, value5 };
}

const getRadioRows = () => {
  let radios = [];
  for (let i = 1; i <= 5; i++) {
    radios.push(<Radio value={i} />);
  }
  return radios;
};

const rows = [
  createData("Size", ...getRadioRows()),
  createData("Width", ...getRadioRows()),
  createData("Comfort", ...getRadioRows()),
  createData("Quality", ...getRadioRows()),
  createData("Length", ...getRadioRows()),
  createData("Fit", ...getRadioRows())
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Characteristic</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">2</TableCell>
            <TableCell align="right">3</TableCell>
            <TableCell align="right">4</TableCell>
            <TableCell align="right">5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value1}</TableCell>
              <TableCell align="right">{row.value2}</TableCell>
              <TableCell align="right">{row.value3}</TableCell>
              <TableCell align="right">{row.value4}</TableCell>
              <TableCell align="right">{row.value5}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
