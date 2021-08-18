import { useState } from 'react';
import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
import { useAuth } from '../../contexts/auth';
import { MenuEmployee } from './components/MenuEmployee';
import { MenuEmployer } from './components/MenuEmployer';
import logo from '../../assets/logo.png';

import * as Styles from './styles';

export function Menu() {
  const { user } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    openMenu === false
      ? (
        <Styles.MenuContainer>
          <AiOutlineMenu
            style={{
              height: 50, width: 50, cursor: 'pointer', color: 'white',
            }}
            onClick={() => { setOpenMenu(!openMenu); }}
          />
        </Styles.MenuContainer>
      ) : ((
        <Styles.MenuWrapper>
          <Styles.MenuHeading>

            <img src={logo} alt="Logo do hostel" height={120} width={180} />
            <AiOutlineArrowLeft
              style={{
                MarginLeft: 10, height: 35, width: 35, cursor: 'pointer', color: '#dc6128',
              }}
              onClick={() => { setOpenMenu(!openMenu); }}
            />
          </Styles.MenuHeading>
          {user === 'Gerente'
            ? <MenuEmployer />
            : <MenuEmployee /> }
        </Styles.MenuWrapper>
      ))
  );
}
