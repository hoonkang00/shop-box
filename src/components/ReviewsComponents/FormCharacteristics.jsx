import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

export default function FormCharacteristic({
  newReviewCharacteristic,
  characteristicId
}) {
  const initialState = Object.keys(characteristicId).reduce(
    (obj, radioState) => {
      obj[radioState] = false;
      return obj;
    },
    {}
  );
  const [active, setActive] = useState(initialState);

  const createData = (name, value1, value2, value3, value4, value5, id) => {
    return { name, value1, value2, value3, value4, value5, id };
  };

  const getRadioRows = rowName => {
    let radios = [];
    for (let i = 1; i <= 5; i++) {
      radios.push(
        <Radio
          value={i}
          id={`${characteristicId[rowName].id}`}
          name={rowName}
          checked={active[rowName] === `${i}`}
        />
      );
    }
    return radios;
  };

  const rows = Object.keys(characteristicId).map(rowName => {
    return createData(
      rowName,
      ...getRadioRows(rowName),
      characteristicId[rowName].id
    );
  });

  const update = event => {
    newReviewCharacteristic[event.target.id] = event.target.value;
    setActive({ ...active, [event.target.name]: event.target.value });
  };
  const classes = useStyles();

  return (
    <Paper className={classes.root} className="characteristic-form-entries">
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
            <TableRow
              key={row.name}
              id={row.id}
              onChange={event => {
                event.persist();
                update(event);
              }}
            >
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
