import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';
import { CreateGuest } from '../../components/Form/Guest';

export default function Register() {
  return (
    <Container>
      <Header header="Funcionario" />
      <Styles.WrapperContent>
        <CreateGuest />
      </Styles.WrapperContent>
    </Container>
  );
}
