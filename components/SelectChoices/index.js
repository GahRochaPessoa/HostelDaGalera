import { useState } from 'react';
import { Modal } from '../Modal/index';
import * as Styles from './styles';
import { api } from '../../pages/api/api';

export function SelectChoices() {
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);
  const [isUserType, setIsUserType] = useState('');
  const [isUserName, setIsUserName] = useState('');
  const [isUserCPF, setIsUserCPF] = useState('');
  const [isUserEmail, setIsUserEmail] = useState('');
  const [isUserTelefone, setIsUserTelefone] = useState('');
  const [isUserBirth, setisUserBirth] = useState('');

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
            {console.log(isUserType)}
            <select onChange={(e) => { setIsUserType(e.target.value); }}>
              <option value="1">
                Gerente
              </option>
              <option value="2">
                Recepcionista
              </option>
            </select>
            <input id="name" type="text" required placeholder="Nome" onChange={(e) => setIsUserName(e.target.value)} />
            <input id="cpf" type="text" placeholder="CPF" required onChange={(e) => setIsUserCPF(e.target.value)} />
            <input id="email" type="text" placeholder="Email" required onChange={(e) => setIsUserEmail(e.target.value)} />
            <input id="telefone" type="text" placeholder="Telefone" required onChange={(e) => setIsUserTelefone(e.target.value)} />
            <input id="dataNascimento" type="text" placeholder="Data Nascimento" required onChange={(e) => { setisUserBirth(e.target.value); }} />
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
        <Styles.Button value="Cadastrar" variant="filled" type="submit" backgroundColor="#6558f5" onClick={() => { setIsRegister(!isRegister); }} />
        <Styles.Button value="Alterar" variant="filled" type="submit" backgroundColor="#6558f5" onClick={() => { setIsRegisterUpdate(!isRegisterUpdate); }} />
        <Styles.Button value="Excluir" variant="filled" type="submit" backgroundColor="#6558f5" onClick={() => { setIsRegisterDelete(!isRegisterDelete); }} />
      </Styles.ContainerButtons>
    </>
  );
}
