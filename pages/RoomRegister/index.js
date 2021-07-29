import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';
import { RoomForm } from '../../components/Form/Room';
import { useAuth } from '../../contexts/auth';

export default function RoomRegistration() {
  const { user, setUser } = useAuth();
  useEffect(() => {
    setUser(sessionStorage.getItem('user'));
  }, []);
  return (
    <Container>
      <Header header={user} />
      <Styles.WrapperContent>
        <RoomForm />
      </Styles.WrapperContent>
    </Container>
  );
}
