import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  BsPlusSquare,
  BsXSquare, BsFileEarmarkArrowUp,
} from 'react-icons/bs';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';
/* import { ReservationForm } from '../../components/Form/Reservation'; */
import { useAuth } from '../../contexts/auth';

export default function RoomRegistration() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    setUser(sessionStorage.getItem('user'));
  }, []);
  return (
    <Container>
      <Header header={user} />
      <Styles.WrapperContent>

        {/* <ReservationForm /> */}
        <Styles.ChoicesButtons>
          <Styles.Button
            value="Alterar"
            variant="filled"
            type="submit"
            backgroundColor="#6558f5"
            onClick={() => router.push('/GuestAssociation')}
          >
            <Styles.ButtonWrapper>
              <BsFileEarmarkArrowUp size="1.5em" id="buttonIcon" />
              <h3>
                Associar Reserva
              </h3>
            </Styles.ButtonWrapper>
          </Styles.Button>
          <Styles.Button
            value="Alterar"
            variant="filled"
            type="submit"
            backgroundColor="#6558f5"
            onClick={() => router.push('/GuestReservation')}
          >
            <Styles.ButtonWrapper>
              <BsFileEarmarkArrowUp size="1.5em" id="buttonIcon" />
              <h3>
                Escolher Quarto
              </h3>
            </Styles.ButtonWrapper>
          </Styles.Button>
        </Styles.ChoicesButtons>
      </Styles.WrapperContent>
    </Container>
  );
}
