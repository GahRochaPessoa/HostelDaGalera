/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';
import '../../node_modules/antd/dist/antd.css';
import { CreateEmployee } from '../../components/Form/Employee';
import { useAuth } from '../../contexts/auth';

export default function RegisterEmployee() {
  const { user, setUser } = useAuth();
  useEffect(() => {
    setUser(sessionStorage.getItem('user'));
  }, []);
  return (
    <Container>
      <Header header={user} />
      <Styles.WrapperContent>
        <CreateEmployee />
      </Styles.WrapperContent>
    </Container>
  );
}
