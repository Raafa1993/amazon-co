import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from "react";
import { IconBaseProps } from "react-icons";
import { maskPhone, maskCEP, maskCPF, maskDate } from "./masks";

import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value: string;
  handleOnPassword?: () => void;
  Icon?: React.ComponentType<IconBaseProps>;
  mask?: string;
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
  mask,
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

  const handleKeyUp = useCallback(e => {
      if (mask === "cpf") {
        maskCPF(e);
      } else if (mask === "cep") {
        maskCEP(e);
      } else if (mask === "date") {
        maskDate(e);
      } else if (mask === "fone") {
        maskPhone(e);
      } else {
        return;
      }
      return;
    },
    [mask],
  );

  return (
    <Container value={value} isField={isField} isFocused={isFocused}>
      <label htmlFor={name}>{label}</label>

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
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

      {error?.error && (
        <Error>
          <span>{error.message}</span>
        </Error>
      )}
    </Container>
  );
}
