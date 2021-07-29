import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';
import { BedForm } from '../../components/Form/Bed';
import { useAuth } from '../../contexts/auth';

export default function BedReservation() {
  const { user, setUser } = useAuth();
  useEffect(() => {
    setUser(sessionStorage.getItem('user'));
  }, []);
  return (
    <Container>
      <Header header={user} />
      <Styles.WrapperContent>
        <BedForm />
      </Styles.WrapperContent>
    </Container>
  );
}
