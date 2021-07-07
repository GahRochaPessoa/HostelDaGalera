import { useState, useEffect } from 'react';
import { Modal } from '../../Modal';
import * as Styles from './styles';
import { api } from '../../../pages/api/api';

export function BedForm() {
  const [data, setData] = useState();
  const [roomData, setRoomData] = useState();
  const [handleTypeData, setHandleTypeData] = useState();
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);
  const [isBedType, setIsBedType] = useState(0);
  const [isOpen, setIsOpen] = useState('');
  const [isDelete, setIsDelete] = useState();
  const [isBedStatus, setIsBedStatus] = useState('l');
  const [isBedName, setIsBedName] = useState('');
  const [isBedRoom, setIsBedRoom] = useState(0);
  const [isBedDescription, setIsBedDescription] = useState('');
  const [isBedValue, setIsBedValue] = useState(0);

  useEffect(() => {
    async function GetBedData() {
      const { data: BedData } = await api.get('/cama/');
      if (!BedData) {
        return {
          notFound: true,
        };
      }
      setData(BedData);
      return {
        props: { data }, // will be passed to the page component as props
      };
    }
    GetBedData();
  }, []);

  useEffect(() => {
    async function GetRoomData() {
      const { data: RoomData } = await api.get('/quarto/');
      if (!RoomData) {
        return {
          notFound: true,
        };
      }
      setRoomData(RoomData);
      return {
        props: { data }, // will be passed to the page component as props
      };
    }
    GetRoomData();
  }, []);

  useEffect(() => {
    async function GetTypeRoomData() {
      const { data: typeRoom } = await api.get('/tipoquarto/');
      if (!typeRoom) {
        return {
          notFound: true,
        };
      }
      setHandleTypeData(typeRoom);
      return {
        props: { data }, // will be passed to the page component as props
      };
    }
    GetTypeRoomData();
  }, []);

  async function registerBed(event) {
    event.preventDefault();
    const dataBed = {
      tipo_cama: isBedType,
      quarto: isBedRoom,
      status: isBedStatus,
      nome: isBedName,
      descricao: isBedDescription,
      valor: isBedValue,
    };
    console.log(dataBed);
    try {
      await api.post('/cama/', dataBed);
      alert('Cama Cadastrada com Sucesso');
      setIsRegister(false);
    } catch (error) {
      alert('Error ao Cadastrar Cama, tente novamente');
    }
  }

  async function deleteBed(event) {
    event.preventDefault();
    try {
      await api.delete('/cama/', isDelete);
      alert('Cama Deletada com Sucesso');
      setIsRegister(false);
    } catch (error) {
      alert('Error ao Deletar uma Cama, tente novamente');
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
          <Styles.Form onSubmit={registerBed}>
            <select onChange={(e) => { setIsBedType(e.target.value); }}>
              <option value={1}>
                Beliche
              </option>
              <option value={2}>
                Solteiro
              </option>
              <option value={3}>
                Casal
              </option>
            </select>
            <select onChange={(e) => { setIsBedRoom(e.target.value); }}>
              {roomData.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.nome}
                </option>
              ))}
            </select>
            <select onChange={(e) => { setIsBedStatus(e.target.value); }}>
              <option value="l">
                Livre
              </option>
              <option value="o">
                Ocupada
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
          <Styles.Form onSubmit={deleteBed}>
            <select onChange={(e) => { setIsDelete(e.target.value); }}>
              {data.map((dataBed) => (
                <option key={dataBed.id} value={console.log(dataBed.id)}>
                  {dataBed.nome}
                </option>
              ))}
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
