import React from "react";
import { func, string } from "prop-types";

function Input({ onChange, value }) {
  return <input onChange={onChange} value={value} />;
}

Input.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
};

export { Input };
