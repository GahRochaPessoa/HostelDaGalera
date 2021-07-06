import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';
import { CreateRoom } from '../../components/Form/Room';

export default function RoomRegistration() {
  return (
    <Container>
      <Header header="Registro Quartos" />
      <Styles.WrapperContent>
        <CreateRoom />
      </Styles.WrapperContent>
    </Container>
  );
}
