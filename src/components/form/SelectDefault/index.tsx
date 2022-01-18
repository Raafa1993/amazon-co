import React, { useEffect, useState } from "react";
import IconArrowLeft from "../../../assets/icons/IconArrowLeft";

import { Container } from "./styles";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: any;
  onChangeText: (value: string) => void;
  search?: boolean;
  style?: any;
}

export default function SelectDefault({
  placeholder,
  value,
  onChangeText,
  children,
}: InputProps) {
  const [valueInput, setValueInput] = useState<string>(value);

  useEffect(() => {
    setValueInput(value);
  }, [value]);

  function handleOnChange(e: React.FormEvent<HTMLSelectElement>) {
    setValueInput(e.currentTarget.value);
    onChangeText(e.currentTarget.value);
  }

  return (
    <Container className="form-children-default select">
      <select value={valueInput} onChange={handleOnChange}>
        {placeholder && (
          <option value="" disabled={true}>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <IconArrowLeft />
    </Container>
  );
}
