import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useField } from '@unform/core';
import NumberFormat from 'react-number-format';


import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  valueCurrency?: any;
}

export default function NewInputMask({
  name,
  label,
  valueCurrency,
}: InputProps) {
  const inputRef = useRef<any>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);
  const { fieldName, defaultValue, error, registerField, } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsField(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });

    setIsField(true)
  }, [fieldName, registerField]);

  return (
    <Container 
    isFocused={isFocused}
    isErrored={!!error}
    isField={isField}
    >
      <label 
        htmlFor={name}
      >
        {label}
      </label>

      <NumberFormat
        className="teste"
        thousandsGroupStyle="thousand"
        value={valueCurrency}
        prefix="R$: "
        decimalSeparator="."
        displayType="input"
        type="text"
        thousandSeparator={true}
        allowNegative={true} 
        disabled

        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        id={name}
        name={name}
      />

      {error && (
        <Error>
          <span>{error}</span>
        </Error>
      )}
    </Container>
  );
}
