import React, { useEffect, useState } from "react";
import IconArrowLeft from "../../../assets/icons/IconArrowLeft";

import { Container } from "./styles";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: any;
  onChangeText: (value: string) => void;
  search?: boolean;
  width?: boolean;
  ronded?: boolean;
}

export default function SelectDefault({
  placeholder,
  value,
  ronded,
  width,
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
    <Container width={width} ronded={ronded} className="form-children-default select">
      <select 
        value={valueInput}
        onChange={handleOnChange}
      >
        {placeholder && (
          <option value="default" disabled={true}>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <IconArrowLeft />
    </Container>
  );
}
