import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../../hooks/Auth';

import IconAlert from "../../assets/icons/IconAlert";
import IconArrowLeft from "../../assets/icons/IconArrowLeft";
import ButtonNotification from "../form/ButtonNotification";

import { 
    Container,
    Ul,
    Li,
    ContentRight,
    Separator,
    Profile,
    Image,
    Info,
    MenuProfile,
} from "./styles";
import IconSignUp from "../../assets/icons/IconSignUp";

interface IMenu {
    to: string;
    onClick?(): void;
    name: string;
  }
  
  interface ISiderbar {
    menus: IMenu[];
    path: string;
  }

export default function Header({ menus, path }: ISiderbar) {
  const { signOut, user } = useAuth();
  const history = useHistory()
  const [hasVisible, setHasVisible] = useState(false);

  function handleOnSignOut() {
    // history.push('/')
    signOut()
  }

  return (
    <Container>
      <Ul>
        {menus.map((row, key) => (
          <Li key={key} active={path === row.to ? true : false}>
            <Link to={row.to} onClick={row.onClick ? row.onClick : () => {}}>
              <span>{row.name}</span>
            </Link>
          </Li>
        ))}
      </Ul>

      <ContentRight>
          <ButtonNotification
            icon={<IconAlert />}
            mentions={2}
          />

          <Separator />

          <Profile
            onClick={() => setHasVisible(!hasVisible)}
          >
            <Image>
                <img src="https://avatars.githubusercontent.com/u/37309024?v=4" alt="profile" />
            </Image>
            <Info hasVisible={hasVisible}>
                <h2>{(user?.nome)}</h2>
                <IconArrowLeft />
            </Info>

          <MenuProfile
            hasVisible={hasVisible}
          >
            <button
              className="buttonSignUp"
              onClick={handleOnSignOut}
            >
              <IconSignUp />
              Sair
            </button>
          </MenuProfile>

          </Profile>
      </ContentRight>
    </Container>
  );
}
