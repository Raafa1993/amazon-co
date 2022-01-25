import { ButtonHTMLAttributes, ReactComponentElement, ReactElement } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    status: 'Pendente' | 'Cancelado' | 'Concluido' | 'Visualizar';
    border?: boolean;
    text: string;
    icon?: any;
}

export default function ButtonDefault({ status, icon, border, text, ...rest }: ButtonProps) {
  return (
      <Container
        status={status}
        border={border}
        icon={icon}
        {...rest}
      >

        {icon && (
          <div className="hasIcon">
            {icon}
          </div>
        )}
        
        {text}
      </Container>
  );
}
