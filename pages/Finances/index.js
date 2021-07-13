import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';

export default function Finances() {
  return (
    <Container>
      <Header header="Finanças" />
      <Styles.WrapperContent>
        <h1>Finances</h1>
      </Styles.WrapperContent>
    </Container>
  );
}
