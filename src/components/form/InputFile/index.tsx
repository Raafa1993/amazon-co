import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from "react";
import { IconBaseProps } from "react-icons";
import IconArrowDownload from "../../../assets/icons/IconArrowDownload";
import IconDownload from "../../../assets/icons/IconDownload";

import { Container, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  isDisabled?: boolean;
  handleOnPassword?: () => void;
  Icon?: React.ComponentType<IconBaseProps>;
  error?: {
    error: boolean;
    message: string;
    name: string;
  };
}

export default function InputFile({
  name,
  label,
  Icon,
  isDisabled,
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
    <Label htmlFor={name}>{label}
      <Container isField={isField} isFocused={isFocused}>

        <div className="iconInput">
          <IconDownload />
        </div>

        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          type="file"
          ref={inputRef}
          {...rest}
        />

        <div className="iconInput">
          <IconArrowDownload />
        </div>

      </Container>
    </Label>
  );
}
