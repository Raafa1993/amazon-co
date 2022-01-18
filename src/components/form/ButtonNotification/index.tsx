import { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: any;
  mentions?: number;
}

export default function ButtonNotification({
  mentions,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <Button mentions={mentions} {...rest}>
      {icon}
    </Button>
  );
}
