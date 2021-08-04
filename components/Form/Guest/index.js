/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import {
  useState, useEffect,
} from 'react';
import {
  BsPlusSquare,
  BsXSquare, BsFileEarmarkArrowUp,
} from 'react-icons/bs';
import { Modal } from '../../Modal';
import * as Styles from './styles';
import { UserProvider } from '../../../contexts/users';
import { api } from '../../../pages/api/api';

export function CreateGuest() {
  const [handleEmployeeData, setHandleEmployeeData] = useState([]);
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);
  const [isDelete, setIsDelete] = useState(1);
  const [isUpdate, setIsUpdate] = useState(1);
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
      alert('Error ao Cadastrar hospede, tente novamente');
    }
  }
  async function GetGuestData() {
    const { data: guestData } = await api.get('/hospede/');
    if (!guestData) {
      return {
        notFound: true,
      };
    }
    setHandleEmployeeData(guestData);
  }

  async function deleteGuest(event) {
    event.preventDefault();
    try {
      await api.delete(`/hospede/${isDelete}/`);
      alert('Hospede deletado com Sucesso');
      await GetGuestData();
      setIsRegister(false);
    } catch (error) {
      alert('Error ao apagar hospede, tente novamente');
    }
  }

  async function updateEmployee(event) {
    event.preventDefault();
    const dataGuest = {
      nome: isGuestName,
      cpf: isGuestCPF,
      email: isGuestEmail,
      telefone: isGuestTelefone,
      data_nascimento: isGuestBirth,
    };
    try {
      await api.put(`/hospede/${isUpdate}/`, dataGuest);
      alert('Hospede alterado com Sucesso');

      setIsRegister(false);
    } catch (error) {
      alert('Error ao alterar hospede, tente novamente');
    }
  }

  async function updateGuestFields() {
    const { data: guestFields } = await api.get(`/hospede/${isUpdate}/`);
    setIsGuestName(guestFields.nome);
    setIsGuestCPF(guestFields.cpf);
    setIsGuestEmail(guestFields.email);
    setIsGuestTelefone(guestFields.telefone);
    setIsGuestBirth(guestFields.data_nascimento);
  }

  useEffect(() => {
    updateGuestFields();
  }, [isUpdate]);

  return (
    <UserProvider value={handleEmployeeData}>
      {isRegister === true ? (
        <Modal onClose={onRegisterClose} header="Registrar Hóspede" visible={isRegister}>
          <Styles.Form onSubmit={registerUser}>
            <input id="name" type="text" required placeholder="Nome" onChange={(e) => setIsGuestName(e.target.value)} />
            <input id="cpf" type="text" placeholder="CPF" required onChange={(e) => setIsGuestCPF(e.target.value)} />
            <input id="email" type="text" placeholder="Email" required onChange={(e) => setIsGuestEmail(e.target.value)} />
            <input id="telefone" type="text" placeholder="Telefone" required onChange={(e) => setIsGuestTelefone(e.target.value)} />
            <input id="dataNascimento" type="text" placeholder="Data Nascimento" required onChange={(e) => { setIsGuestBirth(e.target.value); }} />
            <button type="submit">Registrar</button>
          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterUpdate === true ? (
        <Modal onClose={onUpdateClose} header="Editar Hospede" visible={isRegisterUpdate}>
          <Styles.Form onSubmit={updateEmployee}>
            <select
              onChange={(e) => {
                setIsUpdate(e.target.value);
              }}
            >
              {handleEmployeeData.map((employee) => (
                <option
                  key={employee.id}
                  value={employee.id}
                >
                  {employee.nome}
                </option>
              ))}
            </select>

            <input
              id="name"
              type="text"
              value={isGuestName}
              required
              placeholder="Nome"
              onChange={(e) => setIsGuestName(e.target.value)}
            />
            <input
              id="cpf"
              type="text"
              value={isGuestCPF}
              placeholder="CPF"
              required
              onChange={(e) => setIsGuestCPF(e.target.value)}
            />
            <input
              id="email"
              type="text"
              value={isGuestEmail}
              placeholder="Email"
              required
              onChange={(e) => setIsGuestEmail(e.target.value)}
            />
            <input
              id="telefone"
              type="text"
              placeholder="Telefone"
              value={isGuestTelefone}
              required
              onChange={(e) => setIsGuestTelefone(e.target.value)}
            />
            <input
              id="dataNascimento"
              type="text"
              placeholder="Data Nascimento"
              required
              value={isGuestBirth}
              onChange={(e) => { setIsGuestBirth(e.target.value); }}
            />
            <button type="submit">Alterar</button>

          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterDelete === true ? (
        <Modal onClose={onDeleteClose} header="Excluir Hospede" visible={isRegisterDelete}>
          <Styles.Form onSubmit={deleteGuest}>
            <select
              value={isDelete}
              onChange={(e) => {
                setIsDelete(e.target.value);
              }}
            >
              {handleEmployeeData.map((employee) => (
                <option
                  key={employee.id}
                  value={employee.id}
                >
                  {employee.nome}
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
          backgroundColor="#DC6128"
          onClick={() => { setIsRegister(!isRegister); GetGuestData(); }}
        >
          <Styles.ButtonWrapper>
            <BsPlusSquare id="buttonIcon" />
            <h3>
              Cadastrar Hóspede
            </h3>
          </Styles.ButtonWrapper>
        </Styles.Button>
        <Styles.Button
          value="Alterar"
          variant="filled"
          type="submit"
          backgroundColor="#DC6128"
          onClick={() => { setIsRegisterUpdate(!isRegisterUpdate); GetGuestData(); }}
        >
          <Styles.ButtonWrapper>
            <BsFileEarmarkArrowUp size="1.5em" id="buttonIcon" />
            <h3>
              Alterar Hóspede
            </h3>
          </Styles.ButtonWrapper>
        </Styles.Button>
        <Styles.Button
          value="Excluir"
          variant="filled"
          type="submit"
          backgroundColor="#DC6128"
          onClick={() => { setIsRegisterDelete(!isRegisterDelete); GetGuestData(); }}
        >
          <Styles.ButtonWrapper>
            <BsXSquare id="buttonIcon" />
            <h3>
              Excluir Hóspede
            </h3>
          </Styles.ButtonWrapper>
        </Styles.Button>
      </Styles.ContainerButtons>
    </UserProvider>
  );
}
