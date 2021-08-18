import { useRouter } from 'next/router';
import { IoMdPersonAdd } from 'react-icons/io';
import { FaBed } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
/*
import { GiReceiveMoney } from 'react-icons/gi';
import { VscSignOut, VscSignIn } from 'react-icons/vsc'; */

import * as Styles from '../styles';

export function MenuEmployee() {
  const router = useRouter();
  return (
    <>
      <Styles.MenuOptionsContainer>

        <Styles.MenuOption onClick={() => router.push('/Register')}>
          <IoMdPersonAdd style={{
            height: 30,
            width: 30,
            marginRight: 10,
          }}
          />
          <p>Hospedes</p>
        </Styles.MenuOption>
        <Styles.MenuOption onClick={() => router.push('/Reservation')}>
          <BiCalendar style={{
            height: 30,
            width: 30,
            marginRight: 10,
          }}
          />
          <p>Reservas</p>
        </Styles.MenuOption>
      </Styles.MenuOptionsContainer>
    </>
  );
}
