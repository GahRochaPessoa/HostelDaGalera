import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';

export default function CheckOut() {
  return (
    <Container>
      <Header header="CheckOut" />
      <Styles.WrapperContent>
        <h1>CheckOut</h1>
      </Styles.WrapperContent>
    </Container>
  );
}
