import React from "react";
import TextField from "@material-ui/core/TextField";

export const NameInput = (props) => {
  return (
    <TextField
      id="input"
      name="input"
      label="名前"
      autoComplete="shipping address-line1"
      value={props.name}
      onChange={props.onChange}
      variant="outlined"
      placeholder="名前"
      required
    />
  );
};
