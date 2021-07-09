import Link from 'next/link';

import { IoMdPersonAdd } from 'react-icons/io';
import { FaBed, FaDoorOpen } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { IoArrowUndoOutline } from 'react-icons/io5';
/* import { BiCalendar } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import { VscSignOut, VscSignIn } from 'react-icons/vsc'; */

import * as Styles from '../styles';

export function MenuEmployer() {
  return (
    <>
      <Styles.MenuOptionsContainer>
        <Link href="/RegisterEmployee">
          <Styles.MenuOption>
            <MdWork style={{
              height: 30,
              width: 30,
              marginRight: 10,
            }}
            />
            <p>Funcionario</p>
          </Styles.MenuOption>
        </Link>
        <Link href="/RoomRegister">
          <Styles.MenuOption>
            <FaDoorOpen style={{
              height: 30,
              width: 30,
              marginRight: 10,
            }}
            />
            <p>Quarto</p>
          </Styles.MenuOption>
        </Link>
        <Link href="/BedReservation">
          <Styles.MenuOption>
            <FaBed style={{
              height: 30,
              width: 30,
              marginRight: 10,
            }}
            />
            <p>Cama</p>
          </Styles.MenuOption>
        </Link>
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
        {/* <Link href="/Reservation">
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
        <Link href="/Finances">
          <Styles.MenuOption>
            <GiReceiveMoney style={{
              height: 30,
              width: 30,
              marginRight: 10,
            }}
            />
            <p>Finanças</p>
          </Styles.MenuOption>
        </Link>
        <Link href="/Reports">
          <Styles.MenuOption>
            <IoNewspaperOutline style={{
              height: 30,
              width: 30,
              marginRight: 10,
            }}
            />
            <p>Relatórios</p>
          </Styles.MenuOption>
        </Link> */}
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
