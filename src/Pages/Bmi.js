import React, { useState } from "react";
import { TextField } from "@material-ui/core";
export default function Bmi() {
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState();
  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height) ** 2;
    setBmi(bmi);
  };
  return (
    <div className="App">
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

        <TextField id="standard-basic" label="BMI" value={bmi} />
      </form>
    </div>
  );
}
