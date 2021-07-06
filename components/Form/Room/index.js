import { useState } from 'react';
import { Modal } from '../../Modal';
import * as Styles from './styles';
/* import { api } from '../../../../pages/api/api'; */

export function RoomForm() {
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);
  const [isRoomType, setIsRoomType] = useState('');
  const [isRoomName, setIsRoomName] = useState('');
  const [isRoomDescription, setIsRoomDescription] = useState('');

  async function registerUser(event) {
    event.preventDefault();
    /*    const response = await api.post('funcionario', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]); */
  }

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
    <>
      {isRegister === true ? (
        <Modal onClose={onRegisterClose} visible={isRegister}>
          <Styles.Form onSubmit={registerUser}>
            {console.log(isRoomType)}
            <select onChange={(e) => { setIsRoomType(e.target.value); }}>
              <option value="1">
                Misto
              </option>
              <option value="2">
                Masculino
              </option>
              <option value="3">
                Feminino
              </option>
            </select>
            <input id="name" type="text" required placeholder="Nome" onChange={(e) => setIsRoomName(e.target.value)} />
            <input id="description" type="text" placeholder="Descrição" required onChange={(e) => setIsRoomDescription(e.target.value)} />
            <button type="submit">Register</button>
          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterUpdate === true ? (
        <Modal onClose={onUpdateClose} visible={isRegisterUpdate}>
          <p>Update</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </Modal>
      ) : null}

      {isRegisterDelete === true ? (
        <Modal onClose={onDeleteClose} visible={isRegisterDelete}>
          <p>Delete</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </Modal>
      ) : null}
      <Styles.ContainerButtons>
        <Styles.Button value="Cadastrar" variant="filled" type="submit" backgroundColor="teal" onClick={() => { setIsRegister(!isRegister); }} />
        <Styles.Button value="Alterar" variant="filled" type="submit" backgroundColor="teal" onClick={() => { setIsRegisterUpdate(!isRegisterUpdate); }} />
        <Styles.Button value="Excluir" variant="filled" type="submit" backgroundColor="teal" onClick={() => { setIsRegisterDelete(!isRegisterDelete); }} />
      </Styles.ContainerButtons>
    </>
  );
}
