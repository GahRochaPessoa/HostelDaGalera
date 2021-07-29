import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';
import { CreateGuest } from '../../components/Form/Guest';
import { useAuth } from '../../contexts/auth';

export default function Register() {
  const { user, setUser } = useAuth();
  useEffect(() => {
    setUser(sessionStorage.getItem('user'));
  }, []);
  return (
    <Container>
      <Header header={user} />
      <Styles.WrapperContent>
        <CreateGuest />
      </Styles.WrapperContent>
    </Container>
  );
}
