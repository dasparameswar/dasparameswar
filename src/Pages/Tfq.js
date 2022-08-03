import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));
export default function App() {
  const classes = useStyles();
  const [formState, setFormState] = useState({
    values: {},
  });
  const [chipData, setChipData] = useState([]);
  const [tfq, setTfq] = useState([]);

  const handleDelete = (chipToDelete) => () => {
    setTfq((chips) => chips.filter((chip) => chip.text !== chipToDelete.tfq));
    setChipData((chips) =>
      chips.filter((chip) => chip.tfq !== chipToDelete.tfq)
    );
  };

  const handleForm = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
    }));
  };
  const handleAdd = () => {
    let data = {
      tfq: `${formState.values.time} - ${formState.values.foodquan}`,
    };
    setChipData([...chipData, data]);
    let data2 = {
      text: `${formState.values.time} - ${formState.values.foodquan}`,
    };
    setTfq([...tfq, data2]);
    setFormState({
      values: {
        time: "",
        foodquan: "",
      },
    });
  };
  return (
    <div>
      <TextField
        className={classes.text}
        label="Time"
        id="time"
        name="time"
        onChange={handleForm}
        type="text"
        value={formState.values.time || ""}
        variant="outlined"
      />
      <br />
      <TextField
        className={classes.text}
        label="Food & Quantity"
        id="foodquan"
        name="foodquan"
        onChange={handleForm}
        type="text"
        value={formState.values.foodquan || ""}
        variant="outlined"
      />
      <br />
      <Button onClick={handleAdd} className={classes.btn1} variant="contained">
        Add
      </Button>
      {chipData.map((data) => {
        return (
          <li className={classes.chip} key={data.key}>
            <Chip
              className={classes.chip_spacing}
              label={data.tfq}
              onDelete={handleDelete(data)}
            />
          </li>
        );
      })}
    </div>
  );
}
