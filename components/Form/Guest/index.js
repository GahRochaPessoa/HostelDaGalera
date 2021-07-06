import { useState } from 'react';
import { Modal } from '../../Modal';
import * as Styles from './styles';
/* import { api } from '../../../../pages/api/api'; */

export function CreateGuest() {
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);
  const [isOpen, setIsOpen] = useState('');
  const [isGuestName, setIsGuestName] = useState('');
  const [isGuestCPF, setIsGuestCPF] = useState('');
  const [isGuestEmail, setIsGuestEmail] = useState('');
  const [isGuestTelefone, setIsGuestTelefone] = useState('');
  const [isGuestBirth, setIsGuestBirth] = useState('');

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
            <input id="name" type="text" required placeholder="Nome" onChange={(e) => setIsGuestName(e.target.value)} />
            <input id="cpf" type="text" placeholder="CPF" required onChange={(e) => setIsGuestCPF(e.target.value)} />
            <input id="email" type="text" placeholder="Email" required onChange={(e) => setIsGuestEmail(e.target.value)} />
            <input id="telefone" type="text" placeholder="Telefone" required onChange={(e) => setIsGuestTelefone(e.target.value)} />
            <input id="dataNascimento" type="text" placeholder="Data Nascimento" required onChange={(e) => { setIsGuestBirth(e.target.value); }} />
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