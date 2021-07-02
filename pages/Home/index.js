import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';

export default function Home() {
  return (
    <Container>
      <Header header="Home" />
      <Styles.WrapperContent />
    </Container>
  );
}
