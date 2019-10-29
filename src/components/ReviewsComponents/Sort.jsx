import React, { useEffect, useState } from "react";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Sort = ({ sortReviews, productId }) => {
  const classes = useStyles();
  const [numOfReviews, setNumber] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    axios
      .get(`http://18.223.1.30/reviews/${productId.id}/list?count=100000`)
      .then(({ data }) => {
        setNumber(data.results.length);
      })
      .catch(err => {
        console.log(err);
      });
  }, [productId.id]);

  const sort = event => {
    let sortOption = event.target.options[event.target.selectedIndex].value;
    sortReviews([1, "REVIEWS", productId.id, 100000, sortOption]);
    setClear(true);
  };

  const clearList = () => {
    sortReviews([1, "REVIEWS", productId.id]);
    setClear(false);
  };

  return (
    <div>
      {numOfReviews !== 0 ? (
        <div className="sorting-section">
          <div>
            <span>{numOfReviews} reviews, sorted by</span>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple"></InputLabel>
              <Select
                native
                onChange={event => {
                  event.persist();
                  sort(event);
                }}
                inputProps={{
                  name: "age",
                  id: "age-native-simple"
                }}
              >
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
                <option value="helpfulness">helpfulness</option>
              </Select>
            </FormControl>
          </div>
          {clear === true ? (
            <h6 className="clear" onClick={clearList}>
              clear filters
            </h6>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sort;

// export default function SimpleSelect() {
//   const classes = useStyles();
//   const [values, setValues] = React.useState({
//     age: '',
//     name: 'hai',
//   })

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);

//   const handleChange = event => {
//     setValues(oldValues => ({
//       ...oldValues,
//       [event.target.name]: event.target.value,
//     }));
//   };
