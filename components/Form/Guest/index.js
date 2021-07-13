/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import {
  useState, useEffect,
} from 'react';
import { Modal } from '../../Modal';
import * as Styles from './styles';
import { UserProvider } from '../../../contexts/users';
import { api } from '../../../pages/api/api';

export function CreateGuest() {
  const [handleEmployeeData, setHandleEmployeeData] = useState([]);
  const [handleEmployeeFields, setHandleEmployeeFields] = useState({});
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);
  const [isDelete, setIsDelete] = useState();
  const [isUpdate, setIsUpdate] = useState(3);
  const [isUserName, setIsUserName] = useState('');
  const [isUserCPF, setIsUserCPF] = useState('');
  const [isUserEmail, setIsUserEmail] = useState('');
  const [isUserTelefone, setIsUserTelefone] = useState('');
  const [isUserBirth, setisUserBirth] = useState('');

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
    const dataEmployee = {
      nome: isUserName,
      cpf: isUserCPF,
      email: isUserEmail,
      telefone: isUserTelefone,
      data_nascimento: isUserBirth,
    };
    try {
      await api.post('/hospede/', dataEmployee);
      alert('Hospede Cadastrado com Sucesso');
      setIsRegister(false);
    } catch (error) {
      alert('Error ao Cadastrar hospede, tente novamente');
    }
  }
  async function GetEmployeeData() {
    const { data: employeeData } = await api.get('/hospede/');
    if (!employeeData) {
      return {
        notFound: true,
      };
    }
    setHandleEmployeeData(employeeData);
  }

  async function deleteEmployee(event) {
    event.preventDefault();
    try {
      await api.delete(`/hospede/${isDelete}/`);
      alert('Hospede deletado com Sucesso');
      await GetEmployeeData();
      setIsRegister(false);
    } catch (error) {
      alert('Error ao apagar hospede, tente novamente');
    }
  }

  async function updateEmployee(event) {
    event.preventDefault();
    try {
      await api.put(`/hospede/${isUpdate}/`, data);
      alert('Hospede Deletado com Sucesso');

      setIsRegister(false);
    } catch (error) {
      alert('Error ao apagar hospede, tente novamente');
    }
  }

  async function updateEmployeeFields() {
    const { data: employeeFields } = await api.get(`/hospede/${isUpdate}/`);
    setHandleEmployeeFields(employeeFields);
  }

  useEffect(() => {
    updateEmployeeFields();
  }, [isUpdate]);

  return (
    <UserProvider value={handleEmployeeData}>
      {isRegister === true ? (
        <Modal onClose={onRegisterClose} header="Registrar Empregado" visible={isRegister}>
          <Styles.Form onSubmit={registerUser}>
            <input id="name" type="text" required placeholder="Nome" onChange={(e) => setIsUserName(e.target.value)} />
            <input id="cpf" type="text" placeholder="CPF" required onChange={(e) => setIsUserCPF(e.target.value)} />
            <input id="email" type="text" placeholder="Email" required onChange={(e) => setIsUserEmail(e.target.value)} />
            <input id="telefone" type="text" placeholder="Telefone" required onChange={(e) => setIsUserTelefone(e.target.value)} />
            <input id="dataNascimento" type="text" placeholder="Data Nascimento" required onChange={(e) => { setisUserBirth(e.target.value); }} />
            <button type="submit">Registrar</button>
          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterUpdate === true ? (
        <Modal onClose={onUpdateClose} header="Editar hospede" visible={isRegisterUpdate}>
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
              value={handleEmployeeFields.nome}
              required
              placeholder="Nome"
              onChange={(e) => setIsUserName(e.target.value)}
            />
            <input
              id="cpf"
              type="text"
              value={handleEmployeeFields.cpf}
              placeholder="CPF"
              required
              onChange={(e) => setIsUserCPF(e.target.value)}
            />
            <input
              id="email"
              type="text"
              value={handleEmployeeFields.email}
              placeholder="Email"
              required
              onChange={(e) => setIsUserEmail(e.target.value)}
            />
            <input
              id="telefone"
              type="text"
              placeholder="Telefone"
              value={handleEmployeeFields.telefone}
              required
              onChange={(e) => setIsUserTelefone(e.target.value)}
            />
            <input
              id="dataNascimento"
              type="text"
              placeholder="Data Nascimento"
              required
              value={handleEmployeeFields.data_nascimento}
              onChange={(e) => { setisUserBirth(e.target.value); }}
            />
            <button type="submit">Alterar</button>

          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterDelete === true ? (
        <Modal onClose={onDeleteClose} header="Excluir Hospede" visible={isRegisterDelete}>
          <Styles.Form onSubmit={deleteEmployee}>
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
          backgroundColor="#6558f5"
          onClick={() => { setIsRegister(!isRegister); GetEmployeeData(); }}
        />
        <Styles.Button
          value="Alterar"
          variant="filled"
          type="submit"
          backgroundColor="#6558f5"
          onClick={() => { setIsRegisterUpdate(!isRegisterUpdate); GetEmployeeData(); }}
        />
        <Styles.Button
          value="Excluir"
          variant="filled"
          type="submit"
          backgroundColor="#6558f5"
          onClick={() => { setIsRegisterDelete(!isRegisterDelete); GetEmployeeData(); }}
        />
      </Styles.ContainerButtons>
    </UserProvider>
  );
}
