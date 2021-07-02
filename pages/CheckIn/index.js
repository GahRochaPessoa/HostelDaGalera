import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';

export default function CheckIn() {
  return (
    <Container>
      <Header header="CheckIn" />
      <Styles.WrapperContent />
    </Container>
  );
}
