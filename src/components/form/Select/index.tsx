import React, { SelectHTMLAttributes, useCallback, useRef, useState } from 'react';
import IconArrowLeft from '../../../assets/icons/IconArrowLeft';

import { Container, Label } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  value: string;
  isDisabled?: boolean;
  containerStyle?: React.CSSProperties;
}

const Select: React.FC<SelectProps> = ({ name, label, value, isDisabled, containerStyle = {}, ...rest }) => {
  const inputRef = useRef<HTMLSelectElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!inputRef.current?.value);
  }, []);

  return (
    <Label 
      htmlFor={name}
      isDisabled={isDisabled}  
    >
      {label}
      <Container
        style={containerStyle}
        isField={isField}
        isFocused={isFocused}
        isDisabled={isDisabled}  
      >
      
        <select
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={isDisabled}
          ref={inputRef}
          id={name}
          name={name}
          {...rest}
        />
        <IconArrowLeft />
      </Container>
    </Label>

  )
}

export default Select;
