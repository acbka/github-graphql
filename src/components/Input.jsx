import React, { useState } from "react";
import styled from "@emotion/styled/macro";

const StyledInput = styled.input`
  height: 40px;
  border: 2px solid var(--color-dark);
  border-radius: 4px;
`;

const Input = ({ type, setInput }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setInput(e.target.value);
  };

  return (
    <StyledInput
      type={type}
      name="input"
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default Input;
