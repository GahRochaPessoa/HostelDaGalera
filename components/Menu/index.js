import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
import { IoMdPersonAdd } from 'react-icons/io';
import { IoNewspaperOutline, IoArrowUndoOutline } from 'react-icons/io5';
import { BiCalendar } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import { VscSignOut, VscSignIn } from 'react-icons/vsc';

import * as Styles from './styles';

export function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    openMenu === false
      ? (
        <Styles.MenuContainer>
          <AiOutlineMenu style={{ height: 50, width: 50, cursor: 'pointer' }} onClick={() => { setOpenMenu(!openMenu); }} />
        </Styles.MenuContainer>
      ) : ((
        <Styles.MenuWrapper>
          <Styles.MenuHeading>
            <h2>Bem Vindo Gabriel</h2>
            <AiOutlineArrowLeft
              style={{
                MarginLeft: 10, height: 50, width: 50, cursor: 'pointer',
              }}
              onClick={() => { setOpenMenu(!openMenu); }}
            />
          </Styles.MenuHeading>
          <Styles.MenuOptionsContainer>
            <Link href="/Register">
              <Styles.MenuOption>
                <IoMdPersonAdd style={{ height: 30, width: 30, marginRight: 10 }} />
                <p>Hospedes</p>
              </Styles.MenuOption>
            </Link>
            <Link href="/Reservation">
              <Styles.MenuOption>
                <BiCalendar style={{ height: 30, width: 30, marginRight: 10 }} />
                <p>Reservas</p>
              </Styles.MenuOption>
            </Link>
            <Link href="/CheckIn">
              <Styles.MenuOption>
                <VscSignIn style={{ height: 30, width: 30, marginRight: 10 }} />
                <p>CheckIn</p>
              </Styles.MenuOption>
            </Link>
            <Link href="/CheckOut">
              <Styles.MenuOption>
                <VscSignOut style={{ height: 30, width: 30, marginRight: 10 }} />
                <p>CheckOut</p>
              </Styles.MenuOption>
            </Link>
            <Link href="/Finances">
              <Styles.MenuOption>
                <GiReceiveMoney style={{ height: 30, width: 30, marginRight: 10 }} />
                <p>Finanças</p>
              </Styles.MenuOption>
            </Link>
            <Link href="/Reports">
              <Styles.MenuOption>
                <IoNewspaperOutline style={{ height: 30, width: 30, marginRight: 10 }} />
                <p>Relatórios</p>
              </Styles.MenuOption>
            </Link>
            <Link href="/">
              <Styles.MenuOption>
                <IoArrowUndoOutline style={{ height: 30, width: 30, marginRight: 10 }} />
                <p>Sair</p>
              </Styles.MenuOption>
            </Link>
          </Styles.MenuOptionsContainer>
        </Styles.MenuWrapper>
      ))
  );
}
