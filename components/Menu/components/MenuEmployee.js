import Link from 'next/link';

import { IoMdPersonAdd } from 'react-icons/io';
import { IoArrowUndoOutline } from 'react-icons/io5';
import { BiCalendar } from 'react-icons/bi';
import { VscSignOut, VscSignIn } from 'react-icons/vsc';

import * as Styles from '../styles';

export function MenuEmployee() {
  return (
    <>
      <Styles.MenuOptionsContainer>
        <Link href="/Register">
          <Styles.MenuOption>
            <IoMdPersonAdd style={{
              height: 30,
              width: 30,
              marginRight: 10,
            }}
            />
            <p>Hospedes</p>
          </Styles.MenuOption>
        </Link>
        <Link href="/Reservation">
          <Styles.MenuOption>
            <BiCalendar style={{
              height: 30,
              width: 30,
              marginRight: 10,
            }}
            />
            <p>Reservas</p>
          </Styles.MenuOption>
        </Link>
        <Link href="/CheckIn">
          <Styles.MenuOption>
            <VscSignIn style={{
              height: 30,
              width: 30,
              marginRight: 10,
            }}
            />
            <p>CheckIn</p>
          </Styles.MenuOption>
        </Link>
        <Link href="/CheckOut">
          <Styles.MenuOption>
            <VscSignOut style={{
              height: 30,
              width: 30,
              marginRight: 10,
            }}
            />
            <p>CheckOut</p>
          </Styles.MenuOption>
        </Link>
        <Link href="/">
          <Styles.MenuOption>
            <IoArrowUndoOutline style={{
              height: 30,
              width: 30,
              marginRight: 10,
            }}
            />
            <p>Sair</p>
          </Styles.MenuOption>
        </Link>
      </Styles.MenuOptionsContainer>
    </>
  );
}
