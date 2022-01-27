import React, { SelectHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import IconArrowLeft from '../../../assets/icons/IconArrowLeft';

import { Container, Label, Error } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  isDisabled?: boolean;
  containerStyle?: React.CSSProperties;
}

const Select: React.FC<SelectProps> = ({ name, label, isDisabled, containerStyle = {}, ...rest }) => {
  const inputRef = useRef<HTMLSelectElement>(null);
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
    <Label 
      htmlFor={name}
      isDisabled={isDisabled}
      isErrored={!!error}
      isField={isField}
      isFocused={isFocused}
    >
      {label}
      <Container
        style={containerStyle}
        isField={isField}
        isFocused={isFocused}
        isDisabled={isDisabled}  
        isErrored={!!error}
      >
      
        <select
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={isDisabled}
          defaultValue={defaultValue}
          ref={inputRef}
          id={name}
          name={name}
          {...rest}
        />
        <IconArrowLeft />

        {error && (
        <Error>
          <span>{error}</span>
        </Error>
      )}
      </Container>
    </Label>

  )
}

export default Select;
