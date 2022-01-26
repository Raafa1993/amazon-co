import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    status: any;
    border?: boolean;
    text: string;
}

export default function ButtonLinear({ status, border, text, ...rest }: ButtonProps) {
  return (
      <Container
        status={status}
        border={border}
        {...rest}
      >
        {text}
      </Container>
  );
}
