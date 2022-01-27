import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { IconBaseProps } from "react-icons";
import { maskPhone, maskCEP, maskCPF, maskDate, currency } from "./masks";
import { useField } from '@unform/core';

import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  handleOnPassword?: () => void;
  Icon?: React.ComponentType<IconBaseProps>;
  mask?: string;
}

export default function Input({
  name,
  label,
  Icon,
  mask,
  handleOnPassword,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
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

  const handleKeyUp = useCallback(e => {
      if (mask === "cpf") {
        maskCPF(e);
      } else if (mask === "cep") {
        maskCEP(e);
      } else if (mask === "date") {
        maskDate(e);
      } else if (mask === "currency") {
        currency(e);
      } else if (mask === "fone") {
        maskPhone(e);
      } else {
        return;
      }
      return;
    },
    [mask],
  );

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
      isField={isField}
      isFocused={isFocused}
      isErrored={!!error}
    >
      <label htmlFor={name}>{label}</label>

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        onKeyUp={handleKeyUp}
        ref={inputRef}
        id={name}
        name={name}
        {...rest}
      />

      {Icon && (
        <button type="button" onClick={handleOnPassword}>
          <Icon size={20} />
        </button>
      )}

      {error && (
        <Error>
          <span>{error}</span>
        </Error>
      )}
    </Container>
  );
}
