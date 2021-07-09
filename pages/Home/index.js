import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';
import { useAuth } from '../../contexts/auth';
/* import { api } from '../api/api';

export async function getStaticProps() {
  const response = await api.get('funcionario');

  const { data } = response;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
} */

export default function Home() {
  const { user } = useAuth();
  return (
    <Container>
      <Header header="Home" />
      <Styles.WrapperContent />
    </Container>
  );
}
