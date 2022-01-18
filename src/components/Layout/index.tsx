import React from "react";
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
              to: '/myAccount',
              name: 'Minha Conta',
            },
          ]}
        />
      <Main>{props.children}</Main>
    </Container>
  );
}
