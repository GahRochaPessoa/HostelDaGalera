import { useState } from 'react';
import { Modal } from '../../Modal';
import * as Styles from './styles';
/* import { api } from '../../../../pages/api/api'; */

export function BedForm() {
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);
  const [isBedType, setIsBedType] = useState('');
  const [isOpen, setIsOpen] = useState('');
  const [isBedStatus, setIsBedStatus] = useState('');
  const [isBedName, setIsBedName] = useState('');
  const [isBedRoom, setIsBedRoom] = useState('');
  const [isBedDescription, setIsBedDescription] = useState('');
  const [isBedValue, setIsBedValue] = useState(0);

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
            {console.log(isBedType)}
            <select onChange={(e) => { setIsBedType(e.target.value); }}>
              <option value="1">
                Beliche
              </option>
              <option value="2">
                Solteiro
              </option>
              <option value="3">
                Casal
              </option>
            </select>
            <select onChange={(e) => { setIsBedRoom(e.target.value); }}>
              <option value="1">
                Quarto 1
              </option>
              <option value="2">
                Quarto 2
              </option>
              <option value="3">
                Quarto 3
              </option>
            </select>

            <select onChange={(e) => { setIsBedStatus(e.target.value); }}>
              <option value="l">
                Livre
              </option>
              <option value="o">
                Ocupado
              </option>
            </select>
            <input id="name" type="text" required placeholder="Nome" onChange={(e) => setIsBedName(e.target.value)} />
            <input id="description" type="text" placeholder="Descrição" required onChange={(e) => setIsBedDescription(e.target.value)} />
            <input id="value" type="text" placeholder="Valor" required onChange={(e) => setIsBedValue(e.target.value)} />
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
          <Styles.Form onSubmit={registerUser}>
            <select onChange={(e) => { setIsOpen(e.target.value); }}>
              <option value="1">
                Beliche
              </option>
              <option value="2">
                Solteiro
              </option>
              <option value="3">
                Casal
              </option>
            </select>
            <Styles.ButtonDeleteContainer>
              <button type="submit">Apagar</button>
              <button type="submit">Cancelar</button>
            </Styles.ButtonDeleteContainer>
          </Styles.Form>
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
