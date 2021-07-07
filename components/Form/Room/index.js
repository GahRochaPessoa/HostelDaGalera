import { useState, useEffect } from 'react';
import { Modal } from '../../Modal';
import * as Styles from './styles';
import { api } from '../../../pages/api/api';

export function RoomForm() {
  const [handleRoom, setHandleRoom] = useState();
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);
  const [isRoomType, setIsRoomType] = useState('');
  const [isRoomName, setIsRoomName] = useState('');
  const [isRoomDescription, setIsRoomDescription] = useState('');

  useEffect(() => {
    async function GetRoomData() {
      const { data: RoomData } = await api.get('/quarto/');
      if (!RoomData) {
        return {
          notFound: true,
        };
      }
      setHandleRoom(RoomData);
      return {
        props: { RoomData }, // will be passed to the page component as props
      };
    }
    GetRoomData();
  }, []);

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
          <Styles.Form onSubmit={registerRoom}>
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
            <textarea id="description" type="text" placeholder="Descrição" required onChange={(e) => setIsRoomDescription(e.target.value)} />
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
