import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

const characteristicLabelValues = {
  Size: {
    1: "A size too small",
    2: "½ a size too small",
    3: "Perfect",
    4: "½ a size too big",
    5: "A size too wide"
  },
  Width: {
    1: "Too narrow",
    2: "Slightly narrow",
    3: "Perfect",
    4: "Slightly wide",
    5: "Too wide"
  },
  Comfort: {
    1: "Uncomfortable",
    2: "Slightly uncomfortable",
    3: "Ok",
    4: "Comfortable",
    5: "Perfect"
  },
  Quality: {
    1: "Poor",
    2: "Below average",
    3: "What I expected",
    4: "Pretty great",
    5: "Perfect"
  },
  Length: {
    1: "Runs Short",
    2: "Runs slightly short",
    3: "Perfect",
    4: "Runs slightly long",
    5: "Runs long"
  },
  Fit: {
    1: "Runs tight",
    2: "Runs slightly tight",
    3: "Perfect",
    4: "Runs slightly long",
    5: "Runs long"
  }
};

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
        <FormControlLabel
          value="top"
          control={
            <Radio
              value={i}
              id={`${characteristicId[rowName].id}`}
              name={rowName}
              checked={active[rowName] === `${i}`}
              className="table-radio-cell"
              aria-label="radio-cell"
            />
          }
          label={`${characteristicLabelValues[rowName][i]}`}
          labelPlacement="top"
          className="table-radio-cell-label"
          aria-label="radio-cell-label"
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
          <TableRow className="form-header-row">
            <TableCell className="form-header-char-name">
              Characteristic
            </TableCell>
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
              <TableCell align="right" className="radio-cell">
                {row.value1}
              </TableCell>
              <TableCell align="right" className="radio-cell">
                {row.value2}
              </TableCell>
              <TableCell align="right" className="radio-cell">
                {row.value3}
              </TableCell>
              <TableCell align="right" className="radio-cell">
                {row.value4}
              </TableCell>
              <TableCell align="right" className="radio-cell">
                {row.value5}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
