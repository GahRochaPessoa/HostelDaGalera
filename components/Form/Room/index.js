/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import { useState, useRef } from 'react';
import { Modal } from '../../Modal';
import * as Styles from './styles';
import { UserProvider } from '../../../contexts/users';
import { api } from '../../../pages/api/api';

export function RoomForm() {
  const [handleRoomData, setHandleRoomData] = useState([]);
  const [handleRoomFields, setHandleRoomFields] = useState({});
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);
  const [isDelete, setIsDelete] = useState();
  const [isUpdate, setIsUpdate] = useState(2);
  const [isRoomType, setIsRoomType] = useState('');
  const [isRoomName, setIsRoomName] = useState('');
  const [isRoomDescription, setIsRoomDescription] = useState('');

  function onRegisterClose() {
    setIsRegister(false);
  }
  function onUpdateClose() {
    setIsRegisterUpdate(false);
  }
  function onDeleteClose() {
    setIsRegisterDelete(false);
  }
  async function registerRoom(event) {
    event.preventDefault();
    const dataRoom = {
      tipo_quarto: isRoomType,
      nome: isRoomName,
      descricao: isRoomDescription,

    };
    try {
      await api.post('/quarto/', dataRoom);
      alert('Quarto Cadastrado com Sucesso');
      setIsRegister(false);
    } catch (error) {
      alert('Error ao Cadastrar Quarto, tente novamente');
    }
  }
  async function GetRoomData() {
    const { data: RoomData } = await api.get('/quarto/');
    if (!RoomData) {
      return {
        notFound: true,
      };
    }
    setHandleRoomData(RoomData);
  }

  async function deleteRoom(event) {
    event.preventDefault();
    try {
      await api.delete(`/quarto/${isDelete}/`);
      alert('Quarto Deletado com Sucesso');
      await GetRoomData();
      setIsRegister(false);
    } catch (error) {
      alert('Error ao apagar quarto, tente novamente');
    }
  }

  async function updateRoom(event) {
    event.preventDefault();
    try {
      await api.put(`/quarto/${isDelete}/`, data);
      alert('Quarto Deletado com Sucesso');

      setIsRegister(false);
    } catch (error) {
      alert('Error ao apagar quarto, tente novamente');
    }
  }

  async function updateRoomFields() {
    const { data: roomFields } = await api.get(`/quarto/${isUpdate}/`);
    setHandleRoomFields(roomFields);
  }

  useEffect(() => {
    updateRoomFields();
  }, [isUpdate]);

  return (
    <UserProvider value={handleRoomData}>
      {isRegister === true ? (
        <Modal onClose={onRegisterClose} visible={isRegister}>
          <Styles.Form onSubmit={registerRoom}>
            {console.log(isRoomType)}
            <select value={isRoomType} onChange={(e) => { setIsRoomType(e.target.value); }}>
              <option value="1">
                Masculino
              </option>
              <option value="2">
                Feminino
              </option>
              <option value="3">
                Misto
              </option>
            </select>
            <input id="name" type="text" required placeholder="Nome" onChange={(e) => setIsRoomName(e.target.value)} />
            <textarea id="Descricao" type="text" placeholder="Descricao" required onChange={(e) => setIsRoomDescription(e.target.value)} />
            <button type="submit">Registrar</button>
          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterUpdate === true ? (
        <Modal onClose={onUpdateClose} visible={isRegisterUpdate}>
          <Styles.Form onSubmit={updateRoom}>
            <select
              onChange={(e) => {
                setIsUpdate(e.target.value);
                updateEmployeeFields();
              }}
            >
              {/* {console.log('Gabs', isUpdate)} */}
              {handleRoomData.map((employee) => (

                <option
                  key={employee.id}
                  value={employee.id}
                >
                  {employee.id}
                </option>

              ))}
            </select>

            <select
              value={handleRoomFields.tipo_quarto}
              onChange={(e) => { setIsRoomType(e.target.value); }}
            >
              <option value="1">
                Masculino
              </option>
              <option value="2">
                Feminino
              </option>
              <option value="3">
                Misto
              </option>
            </select>
            <input
              id="name"
              type="text"
              value={handleRoomFields.nome}
              required
              placeholder="Nome"
              onChange={(e) => setIsUserName(e.target.value)}
            />
            <input
              id="descricao"
              type="text"
              value={handleRoomFields.descricao}
              placeholder="descricao"
              required
              onChange={(e) => setIsUserCPF(e.target.value)}
            />

            <button type="submit">Alterar</button>

          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterDelete === true ? (
        <Modal onClose={onDeleteClose} visible={isRegisterDelete}>
          <Styles.Form onSubmit={deleteRoom}>
            <select
              value={isDelete}
              onChange={(e) => {
                setIsDelete(e.target.value);
              }}
            >
              {handleRoomData.map((room) => (
                <option
                  key={room.id}
                  value={room.id}
                >
                  {room.nome}
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
          onClick={() => { setIsRegister(!isRegister); GetRoomData(); }}
        />
        <Styles.Button
          value="Alterar"
          variant="filled"
          type="submit"
          backgroundColor="teal"
          onClick={() => { setIsRegisterUpdate(!isRegisterUpdate); GetRoomData(); }}
        />
        <Styles.Button
          value="Excluir"
          variant="filled"
          type="submit"
          backgroundColor="teal"
          onClick={() => { setIsRegisterDelete(!isRegisterDelete); GetRoomData(); }}
        />
      </Styles.ContainerButtons>
    </UserProvider>
  );
}
