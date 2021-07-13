import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';

export default function Reports() {
  return (
    <Container>
      <Header header="Relatórios" />
      <Styles.WrapperContent>
        <h1>Reports</h1>
      </Styles.WrapperContent>
    </Container>
  );
}
