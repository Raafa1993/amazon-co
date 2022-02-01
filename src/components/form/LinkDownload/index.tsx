import React, {
  AnchorHTMLAttributes,
  useCallback,
  useState,
} from "react";
import IconArrowDownload from "../../../assets/icons/IconArrowDownload";
import IconDownload from "../../../assets/icons/IconDownload";

import { Container, Label } from "./styles";

interface InputProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  isDisabled?: boolean;
  error?: {
    error: boolean;
    message: string;
    name: string;
  };
  ref?: any
}

export default function LinkDownload({
  label,
  isDisabled,
  error,
  children,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Label htmlFor={label}>{label}
      <Container isFocused={isFocused}>

        <div className="iconInput">
          <IconDownload />
        </div>

        <a
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        >
          {children}
        </a>

        <div className="iconInput">
          <IconArrowDownload />
        </div>

      </Container>
    </Label>
  );
}
