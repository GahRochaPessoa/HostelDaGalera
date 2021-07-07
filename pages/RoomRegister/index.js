import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';
import { RoomForm } from '../../components/Form/Room';

export default function RoomRegistration() {
  return (
    <Container>
      <Header header="Registro Quartos" />
      <Styles.WrapperContent>
        <RoomForm />
      </Styles.WrapperContent>
    </Container>
  );
}
