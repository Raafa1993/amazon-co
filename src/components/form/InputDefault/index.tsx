import React, { useEffect, useState } from "react";
import IconSearch from "../../../assets/icons/IconSearch";

import { Container } from "./styles";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string | any;
  onChangeText: (value: string | any) => void;
  search?: boolean;
  className?: any;
}

const InputDefault: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  search = false,
  className = "",
  ...rest
}) => {
  const [valueInput, setValueInput] = useState<string>(value);

  useEffect(() => {
    setValueInput(value);
  }, [value]);

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    setValueInput(e.currentTarget.value);
    onChangeText(e.currentTarget.value);
  }

  return (
    <Container className={`form-children-default input ${className}`}>
      {search && <IconSearch />}

      <input
        value={valueInput}
        onChange={handleOnChange}
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  );
};

export default InputDefault;
