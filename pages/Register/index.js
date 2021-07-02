import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import * as Styles from './styles';

export default function Register() {
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);

  function onRegisterClose() {
    setIsRegister(false);
  }
  function onUpdateClose() {
    setIsRegisterUpdate(false);
  }
  function onDeleteClose() {
    setIsRegisterDelete(false);
  }

  return (
    <Container>
      <Header header="Registro" />
      { isRegister === true ? (
        <Modal onClose={onRegisterClose} visible={isRegister}>
          <p>Register</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </Modal>
      ) : null}

      { isRegisterUpdate === true ? (
        <Modal onClose={onUpdateClose} visible={isRegisterUpdate}>
          <p>Update</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </Modal>
      ) : null}

      { isRegisterDelete === true ? (
        <Modal onClose={onDeleteClose} visible={isRegisterDelete}>
          <p>Delete</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </Modal>
      ) : null}
      <Styles.WrapperContent>
        <Styles.ContainerButtons>
          <Styles.Button value="Cadastrar" variant="filled" type="submit" backgroundColor="teal" onClick={() => { setIsRegister(!isRegister); }} />
          <Styles.Button value="Alterar" variant="filled" type="submit" backgroundColor="teal" onClick={() => { setIsRegisterUpdate(!isRegisterUpdate); }} />
          <Styles.Button value="Excluir" variant="filled" type="submit" backgroundColor="teal" onClick={() => { setIsRegisterDelete(!isRegisterDelete); }} />
        </Styles.ContainerButtons>
      </Styles.WrapperContent>
    </Container>
  );
}
