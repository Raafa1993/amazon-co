import Header from "../Header";

import { Container, Main } from "./styles";

export default function Layout(props: any) {
  return (
    <Container>
      <Header
        path={props.location.pathname}
        menus={[
            {
              to: '/home',
              name: 'Home',
            },
            {
              to: '/minha-conta',
              name: 'Minha Conta',
            },
            // {
            //   to: '/meus-pedidos',
            //   name: 'Meus pedidos',
            // },
          ]}
        />
      <Main>{props.children}</Main>
    </Container>
  );
}
