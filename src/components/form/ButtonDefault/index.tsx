import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    status: 'Pendente' | 'Cancelado' | 'Concluido';
    border?: boolean;
    text: string;
}

export default function ButtonDefault({ status, border, text, ...rest }: ButtonProps) {
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
