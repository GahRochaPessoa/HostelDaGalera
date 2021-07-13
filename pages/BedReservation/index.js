import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';
import { BedForm } from '../../components/Form/Bed';

export default function BedReservation() {
  return (
    <Container>
      <Header header="Cama" />
      <Styles.WrapperContent>
        <BedForm />
      </Styles.WrapperContent>
    </Container>
  );
}
