import React, { TextareaHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';

import { Container, Error } from './styles'
import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  containerStyle?: React.CSSProperties;
  icon?: React.ComponentType<IconBaseProps>;
  label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, icon: Icon, containerStyle = {}, ...rest }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
      style={containerStyle}
      isErrored={!!error}
      isField={isField}
      isFocused={isFocused}
    >
      <label htmlFor={name}>{label}</label>


      <textarea
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        id={name}
        name={name}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />


      {error && (
        <Error>
          <span>{error}</span>
        </Error>
      )}
    </Container>
  )
}

export default TextArea;