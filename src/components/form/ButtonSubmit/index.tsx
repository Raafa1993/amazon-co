import React, { ButtonHTMLAttributes } from 'react';
import IconLoading from '../../../assets/icons/IconLoading';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean
    type: string
  }

export default function ButtonSubmit({ children, loading, ...rest }: ButtonProps) {
  return (
      <Container
        disabled={loading}
        isLoading={Number(loading)}
        {...rest}
      >
        {loading ? <IconLoading /> : children}
      </Container>
  );
}
