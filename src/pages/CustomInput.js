import React from "react";
import { InputLabel, TextField } from "@mui/material";

const CustomInput = ({ label, placeholder, ...rest }) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <input
        {...rest}
        placeholder={placeholder}
        style={{
          color: "white",
          background: "black",
          border: "none", // Remove the border
          outline: "none", // Remove the focus outline
          fontSize: "16px",
          padding: "8px 12px",
          width: "100%",
          borderRadius: "4px",
          border: "1px solid white"
        }}
      />
    </>
  );
};

export default CustomInput;
