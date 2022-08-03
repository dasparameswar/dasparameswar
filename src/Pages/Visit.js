import React from "react";

import TextField from "@material-ui/core/TextField";

export default function DatePickers() {
  return (
    <div>
      <form className={DatePickers} noValidate>
        <TextField
          id="date"
          label="NEXT VISIT"
          type="date"
          defaultValue="2022-07-15"
          className={DatePickers}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
}
