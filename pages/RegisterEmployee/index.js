/* eslint-disable react/jsx-props-no-spreading */

import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';
import '../../node_modules/antd/dist/antd.css';
import { CreateEmployee } from '../../components/Form/Employee';

export default function RegisterEmployee() {
  return (
    <Container>
      <Header header="Registro Funcionario" />
      <Styles.WrapperContent>
        <CreateEmployee />
      </Styles.WrapperContent>
    </Container>
  );
}
