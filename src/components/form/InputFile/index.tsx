import React, {
  InputHTMLAttributes,
  useCallback,
  useState,
} from "react";
import IconArrowDownload from "../../../assets/icons/IconArrowDownload";
import IconDownload from "../../../assets/icons/IconDownload";

import { Container, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  isDisabled?: boolean;
  error?: {
    error: boolean;
    message: string;
    name: string;
  };
  ref?: any
}

export default function InputFile({
  name,
  label,
  isDisabled,
  error,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Label htmlFor={name}>{label}
      <Container isField={isField} isFocused={isFocused}>

        <div className="iconInput">
          <IconDownload />
        </div>

        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />

        <div className="iconInput">
          <IconArrowDownload />
        </div>

      </Container>
    </Label>
  );
}
