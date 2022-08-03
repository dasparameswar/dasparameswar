import React, { useState } from "react";
import {
  TextField,
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  Button,
  Chip,
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core/styles";
let today = new Date();

const MyButton = styled(Button)({
  boxShadow:
    "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  border: 0,
  borderRadius: 3,

  color: "black",
  height: 48,
  padding: "0 30px",
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = ["cardio", "yoga", "lunses"];
const names1 = [
  "CBC",
  "THYROID",
  "HAEMOGLOBIN",
  "HBA1C",
  "FASTING SUGAR",
  "PP",
];

function Prescription(props) {
  const classes = useStyles();
  const [exercise, setExercise] = React.useState([]);
  const [test, setTest] = React.useState([]);
  const [chipData, setChipData] = useState([]);
  const [tfq, setTfq] = useState([]);
  const [water, setWater] = React.useState("");
  const [ref, setRef] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState();
  const [age, setAge] = React.useState("");
  const [date, setDate] = useState(
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}`
  );
  const [formState, setFormState] = useState({
    values: {},
  });

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height) ** 2;
    setBmi(bmi);
  };

  const handleChange0 = (event) => {
    setAge(event.target.value);
  };
  const handleChange1 = (event) => {
    setExercise(event.target.value);
  };
  const handleChange2 = (event) => {
    setWater(event.target.value);
  };
  const handleChange3 = (event) => {
    setRef(event.target.value);
  };
  const handleChange4 = (event) => {
    setTest(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };
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
  const handleDate = (event) => {
    setDate(event.target.value);
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
        foodquantity: "",
      },
    });
  };

  const handleSubmit = async () => {
    let x = {
      name: age,
      weight: mass,
      height: height,
      bmi: bmi,
      tfq: tfq,
      water: water,
      exercise: exercise,
      test: test,
      referral: ref,
      visit: date,
    };
    console.log(x);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      m={8}
      p={1}
      bgcolor="background.paper"
    >
      <div className={classes.root}>
        <Typography className={classes.head} component="h2" variant="h3">
          Make Prescription
        </Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">NAME</InputLabel>
          <Select
            native
            onChange={handleChange0}
            label="Name"
            value={age}
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option>ABCD</option>
            <option>EFGH</option>
            <option>IJKL</option>
          </Select>
        </FormControl>
        <br />
        <form onSubmit={calculate}>
          <TextField
            id="standard-basic"
            label="WEIGHT"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
          />

          <br />
          <TextField
            id="standard-basic"
            label="HEIGHT"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />
          <TextField
            id="standard-basic"
            label="BMI"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
          />
        </form>
        <br />
        <form>
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
        </form>
        <br />
        <form>
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
        </form>
        <br />
        <MyButton
          onClick={handleAdd}
          className={classes.btn1}
          variant="contained"
          color="primary"
        >
          Add
        </MyButton>
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
        <br />
        <form>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-checkbox-label">EXERCISE</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={exercise}
              onChange={handleChange1}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={exercise.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              WATER
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={water}
              onChange={handleChange2}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="0-1.5 liters">(0-1.5)liters</MenuItem>
              <MenuItem value="1.5-2.5 liters">(1.5-2.5)liters</MenuItem>
              <MenuItem value="2.5-3.5 liters">(2.5-3.5)liters</MenuItem>
              <MenuItem value="3.5-4.5 liters">(3.5-4.5)liters</MenuItem>
              <MenuItem value="4.5-5.5 liters">(4.5-5.5)liters</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              REFERRAL
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open1}
              onClose={handleClose1}
              onOpen={handleOpen1}
              value={ref}
              onChange={handleChange3}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="A">REF A</MenuItem>
              <MenuItem value="B">REF B</MenuItem>
              <MenuItem value="C">REF C</MenuItem>
              <MenuItem value="D">REF D</MenuItem>
              <MenuItem value="E">REF E</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-checkbox-label">ADD TEST</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={test}
              onChange={handleChange4}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names1.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={test.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
        <br />
        <form>
          <TextField
            id="date"
            label="Next visit"
            type="date"
            variant="outlined"
            defaultValue={date}
            // value={date}
            className={classes.text}
            onChange={handleDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>

        <br />

        <MyButton onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </MyButton>
      </div>
    </Box>
  );
}

export default Prescription;
