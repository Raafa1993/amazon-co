import React, { TextareaHTMLAttributes, useCallback, useRef, useState } from 'react';

import { Container } from './styles'
import { IconBaseProps } from 'react-icons/lib';

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

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!inputRef.current?.value);
  }, []);


  return (
    <Container
      style={containerStyle}
    //   isErrored={!!error}
      isField={isField}
      isFocused={isFocused}
    >
      <label htmlFor={name}>{label}</label>


      <textarea
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        id={name}
        name={name}
        // defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />


      {/* {error && (
        <Error title={error}>
          <FiAlertCircle color="c53030" size={20} />
        </Error>
      )} */}
    </Container>
  )
}

export default TextArea;