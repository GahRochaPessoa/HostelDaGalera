import { useState } from 'react';

import { GoChevronDown } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { IoArrowUndoOutline } from 'react-icons/io5';
import Link from 'next/link';
import { Menu } from '../Menu';
import * as Styles from './styles';

export function Header({ header }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Styles.HeaderContainer>
      <Menu />
      <Styles.HomeTitle>
        <Styles.HeaderWrapper>
          <FaUserCircle size="2em" id="userLogoHeader" />
          <h2>
            {header}
          </h2>
          <GoChevronDown size="1.2em" style={{ cursor: 'pointer' }} id="headerDrop" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          {isMenuOpen ? (
            <Styles.DropDownMenuOptions>
              <Link href="/" onClick={() => { sessionStorage.setItem('user', ''); }}>
                <Styles.DropDownMenuWrapper>
                  <IoArrowUndoOutline style={{
                    height: 30,
                    width: 30,
                    marginRight: 10,
                  }}
                  />
                  <p>Sair</p>
                </Styles.DropDownMenuWrapper>
              </Link>
            </Styles.DropDownMenuOptions>
          ) : null}
        </Styles.HeaderWrapper>
      </Styles.HomeTitle>
    </Styles.HeaderContainer>
  );
}
