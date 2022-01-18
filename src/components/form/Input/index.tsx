import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from "react";
import { IconBaseProps } from "react-icons";

import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value: string;
  handleOnPassword?: () => void;
  Icon?: React.ComponentType<IconBaseProps>;
  error?: {
    error: boolean;
    message: string;
    name: string;
  };
}

export default function Input({
  name,
  label,
  value,
  Icon,
  error,
  handleOnPassword,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
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
    <Container value={value} isField={isField} isFocused={isFocused}>
      <label htmlFor={name}>{label}</label>

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
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

      {error?.error && (
        <Error>
          <span>{error.message}</span>
        </Error>
      )}
    </Container>
  );
}
