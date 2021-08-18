import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';
import { ReservationForm } from '../../components/Form/GuestAssociation';
import { useAuth } from '../../contexts/auth';

export default function GuestAssociation() {
  const { user, setUser } = useAuth();
  useEffect(() => {
    setUser(sessionStorage.getItem('user'));
  }, []);
  return (
    <Container>
      <Header header={user} />
      <Styles.WrapperContent>
        <ReservationForm />
      </Styles.WrapperContent>
    </Container>
  );
}