import { useState } from 'react';
import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
import { useAuth } from '../../contexts/auth';
/* import { MenuEmployee } from './components/MenuEmployee'; */
import { MenuEmployer } from './components/MenuEmployer';

import * as Styles from './styles';

export function Menu() {
  const { user } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);
  /* const sessionToken = sessionStorage.getItem('user'); */
  return (
    openMenu === false
      ? (
        <Styles.MenuContainer>
          <AiOutlineMenu style={{ height: 50, width: 50, cursor: 'pointer' }} onClick={() => { setOpenMenu(!openMenu); }} />
        </Styles.MenuContainer>
      ) : ((
        <Styles.MenuWrapper>
          <Styles.MenuHeading>
            <h2>
              Bem Vindo
              {' '}
              {user}
            </h2>
            <AiOutlineArrowLeft
              style={{
                MarginLeft: 10, height: 50, width: 50, cursor: 'pointer',
              }}
              onClick={() => { setOpenMenu(!openMenu); }}
            />
          </Styles.MenuHeading>
          {/*  {sessionToken === 'Gerente' */}
          <MenuEmployer />
          {/*  : <MenuEmployee /> } */}
        </Styles.MenuWrapper>
      ))
  );
}
