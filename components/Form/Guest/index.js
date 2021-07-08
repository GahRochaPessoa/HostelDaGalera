/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import { Modal } from '../../Modal';
import * as Styles from './styles';
import { UserProvider } from '../../../contexts/users';
import { api } from '../../../pages/api/api';

export function CreateGuest() {
  const [handleGuestData, setHandleGuestData] = useState([]);
  const [handleGuestFields, setHandleGuestFields] = useState({});
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);
  const [isDelete, setIsDelete] = useState();
  const [isUpdate, setIsUpdate] = useState(2);
  const [isGuestName, setIsGuestName] = useState('');
  const [isGuestCPF, setIsGuestCPF] = useState('');
  const [isGuestEmail, setIsGuestEmail] = useState('');
  const [isGuestTelefone, setIsGuestTelefone] = useState('');
  const [isGuestBirth, setIsGuestBirth] = useState('');

  function onRegisterClose() {
    setIsRegister(false);
  }
  function onUpdateClose() {
    setIsRegisterUpdate(false);
  }
  function onDeleteClose() {
    setIsRegisterDelete(false);
  }
  async function registerUser(event) {
    event.preventDefault();
    const dataGuest = {
      nome: isGuestName,
      cpf: isGuestCPF,
      email: isGuestEmail,
      telefone: isGuestTelefone,
      data_nascimento: isGuestBirth,
    };
    try {
      await api.post('/hospede/', dataGuest);
      alert('Hospede Cadastrado com Sucesso');
      setIsRegister(false);
    } catch (error) {
      alert('Error ao Cadastrar novo Hospede, tente novamente');
    }
  }
  async function GetGuestData() {
    const { data: guestData } = await api.get('/hospede/');
    if (!guestData) {
      return {
        notFound: true,
      };
    }
    setHandleGuestData(guestData);
  }

  async function deleteGuest(event) {
    event.preventDefault();
    try {
      await api.delete(`/hospede/${isDelete}/`);
      alert('Hospede Deletado com Sucesso');
      await GetGuestData();
      setIsRegister(false);
    } catch (error) {
      alert('Error ao apagar Hospede, tente novamente');
    }
  }

  async function updateGuest(event) {
    event.preventDefault();
    try {
      await api.put(`/funcionario/${isDelete}/`, data);
      alert('Hospede Deletado com Sucesso');

      setIsRegister(false);
    } catch (error) {
      alert('Error ao apagar Hospede, tente novamente');
    }
  }

  async function updateGuestFields() {
    const { data: employeeFields } = await api.get(`/hospede/${isUpdate}/`);
    setHandleGuestFields(employeeFields);
  }

  useEffect(() => {
    updateGuestFields();
  }, [isUpdate]);

  return (
    <UserProvider value={handleGuestData}>
      {isRegister === true ? (
        <Modal onClose={onRegisterClose} visible={isRegister}>
          <Styles.Form onSubmit={registerUser}>
            <input
              id="name"
              type="text"
              required
              placeholder="Nome"
              onChange={(e) => setIsGuestName(e.target.value)}
            />
            <input
              id="cpf"
              type="text"
              placeholder="CPF"
              required
              onChange={(e) => setIsGuestCPF(e.target.value)}
            />
            <input
              id="email"
              type="text"
              placeholder="Email"
              required
              onChange={(e) => setIsGuestEmail(e.target.value)}
            />
            <input
              id="telefone"
              type="text"
              placeholder="Telefone"
              required
              onChange={(e) => setIsGuestTelefone(e.target.value)}
            />
            <input
              id="dataNascimento"
              type="text"
              placeholder="Data Nascimento"
              required
              onChange={(e) => { setIsGuestBirth(e.target.value); }}
            />
            <button type="submit">Registrar</button>
          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterUpdate === true ? (
        <Modal onClose={onUpdateClose} visible={isRegisterUpdate}>
          <Styles.Form onSubmit={updateGuest}>
            <select
              onChange={(e) => {
                setIsUpdate(e.target.value);
                updateGuestFields();
              }}
            >
              {/* {console.log('Gabs', isUpdate)} */}
              {handleGuestData.map((guest) => (
                <option
                  key={guest.id}
                  value={guest.id}
                >
                  {guest.id}
                </option>

              ))}
            </select>

            <input
              id="name"
              type="text"
              value={handleGuestFields.nome}
              required
              placeholder="Nome"
              onChange={(e) => setIsGuestName(e.target.value)}
            />
            <input
              id="cpf"
              type="text"
              placeholder="CPF"
              value={handleGuestFields.cpf}
              required
              onChange={(e) => setIsGuestCPF(e.target.value)}
            />
            <input
              id="email"
              type="text"
              value={handleGuestFields.email}
              placeholder="Email"
              required
              onChange={(e) => setIsGuestEmail(e.target.value)}
            />
            <input
              id="telefone"
              type="text"
              placeholder="Telefone"
              required
              value={handleGuestFields.telefone}
              onChange={(e) => setIsGuestTelefone(e.target.value)}
            />
            <input
              id="dataNascimento"
              type="text"
              placeholder="Data Nascimento"
              value={handleGuestFields.data_nascimento}
              required
              onChange={(e) => { setIsGuestBirth(e.target.value); }}
            />
            <button type="submit">Alterar</button>

          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterDelete === true ? (
        <Modal onClose={onDeleteClose} visible={isRegisterDelete}>
          <Styles.Form onSubmit={deleteGuest}>
            <select
              value={isDelete}
              onChange={(e) => {
                setIsDelete(e.target.value);
              }}
            >
              {handleGuestData.map((guest) => (
                <option
                  key={guest.id}
                  value={guest.id}
                >
                  {guest.nome}
                </option>
              ))}
            </select>
            <Styles.ButtonDeleteContainer>
              <button type="submit">Apagar</button>
              <button
                type="reset"
                onClick={() => { setIsRegisterDelete(false); }}
              >
                Cancelar
              </button>
            </Styles.ButtonDeleteContainer>
          </Styles.Form>
        </Modal>
      ) : null}
      <Styles.ContainerButtons>
        <Styles.Button
          value="Cadastrar"
          variant="filled"
          type="submit"
          backgroundColor="teal"
          onClick={() => { setIsRegister(!isRegister); GetGuestData(); }}
        />
        <Styles.Button
          value="Alterar"
          variant="filled"
          type="submit"
          backgroundColor="teal"
          onClick={() => { setIsRegisterUpdate(!isRegisterUpdate); GetGuestData(); }}
        />
        <Styles.Button
          value="Excluir"
          variant="filled"
          type="submit"
          backgroundColor="teal"
          onClick={() => { setIsRegisterDelete(!isRegisterDelete); GetGuestData(); }}
        />
      </Styles.ContainerButtons>
    </UserProvider>
  );
}
