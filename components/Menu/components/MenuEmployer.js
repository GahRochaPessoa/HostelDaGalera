import { useRouter } from 'next/router';
import { IoMdPersonAdd } from 'react-icons/io';
import { FaBed, FaDoorOpen } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
/*
import { GiReceiveMoney } from 'react-icons/gi';
import { VscSignOut, VscSignIn } from 'react-icons/vsc'; */

import * as Styles from '../styles';

export function MenuEmployer() {
  const router = useRouter();
  return (
    <>
      <Styles.MenuOptionsContainer>
        <Styles.MenuOption onClick={() => router.push('/RegisterEmployee')}>
          <MdWork style={{
            height: 30,
            width: 30,
            marginRight: 10,
          }}
          />
          <p>Funcionario</p>
        </Styles.MenuOption>

        <Styles.MenuOption onClick={() => router.push('/RoomRegister')}>
          <FaDoorOpen style={{
            height: 30,
            width: 30,
            marginRight: 10,
          }}
          />
          <p>Quarto</p>
        </Styles.MenuOption>
        <Styles.MenuOption onClick={() => router.push('/BedReservation')}>
          <FaBed style={{
            height: 30,
            width: 30,
            marginRight: 10,
          }}
          />
          <p>Cama</p>
        </Styles.MenuOption>
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
        {/* </Link> */}
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
      </Styles.MenuOptionsContainer>
    </>
  );
}
