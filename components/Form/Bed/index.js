/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import { Modal } from '../../Modal';
import * as Styles from './styles';
import { UserProvider } from '../../../contexts/users';
import { api } from '../../../pages/api/api';

export function BedForm() {
  const [handleBedData, setHandleBedData] = useState([]);
  const [handleRoomData, setHandleRoomData] = useState([]);
  const [handleBedFields, setHandleBedFields] = useState({});
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);
  const [isDelete, setIsDelete] = useState();
  const [isUpdate, setIsUpdate] = useState(2);
  const [isBedType, setIsBedType] = useState('');
  const [isBedRoomType, setIsBedRoomType] = useState(null);
  const [isBedStatus, setIsBedStatus] = useState('');
  const [isBedName, setIsBedName] = useState('');
  const [isBedDescription, setIsBedDescription] = useState('');
  const [isBedValue, setIsBedValue] = useState('');

  function onRegisterClose() {
    setIsRegister(false);
  }
  function onUpdateClose() {
    setIsRegisterUpdate(false);
  }
  function onDeleteClose() {
    setIsRegisterDelete(false);
  }
  async function registerBed(event) {
    event.preventDefault();
    const dataBed = {
      tipo_cama: isBedType,
      quarto: isBedRoomType,
      status: isBedStatus,
      nome: isBedName,
      descricao: isBedDescription,
      valor: isBedValue,
    };
    try {
      await api.post('/cama/', dataBed);
      alert('Cama Cadastrada com Sucesso');
      setIsRegister(false);
    } catch (error) {
      alert('Error ao cadastrar cama, tente novamente');
    }
  }
  async function GetBedData() {
    const { data: bedData } = await api.get('/cama/');
    if (!bedData) {
      return {
        notFound: true,
      };
    }
    setHandleBedData(bedData);
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

  async function deleteBed(event) {
    event.preventDefault();
    try {
      await api.delete(`/cama/${isDelete}/`);
      alert('Cama Deletada com Sucesso');
      await GetBedData();
      setIsRegister(false);
    } catch (error) {
      alert('Error ao apagar cama, tente novamente');
    }
  }

  async function updateBed(event) {
    event.preventDefault();
    try {
      await api.put(`/cama/${isDelete}/`, data);
      alert('Cama Alterada com Sucesso');

      setIsRegister(false);
    } catch (error) {
      alert('Error ao apagar cama, tente novamente');
    }
  }

  async function updateBedFields() {
    const { data: bedFields } = await api.get(`/cama/${isUpdate}/`);
    setHandleBedFields(bedFields);
  }

  useEffect(() => {
    updateBedFields();
  }, [isUpdate]);

  return (
    <UserProvider value={handleBedData}>
      {isRegister === true ? (
        <Modal onClose={onRegisterClose} header="Registrar Cama" visible={isRegister}>
          <Styles.Form onSubmit={registerBed}>
            {console.log(isBedType)}
            <select
              value={isBedType}
              onChange={(e) => {
                setIsBedType(e.target.value);
              }}
            >
              <option value="1">
                Solteiro
              </option>
              <option value="2">
                Beliche
              </option>
              <option value="3">
                Casal
              </option>
            </select>

            <select
              value={isDelete}
              onChange={(e) => {
                setIsBedRoomType(e.target.value);
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

            <select
              onChange={(e) => {
                setIsBedStatus(e.target.value);
              }}
            >
              <option value="l">
                Livre
              </option>
              <option value="o">
                Ocupada
              </option>
            </select>
            <input id="name" type="text" required placeholder="Nome" onChange={(e) => setIsBedName(e.target.value)} />
            <textarea id="Descricao" type="text" placeholder="Descri????o" required onChange={(e) => setIsBedDescription(e.target.value)} />
            <input id="Valor" type="text" placeholder="Valor" required onChange={(e) => setIsBedValue(e.target.value)} />
            <button type="submit">Registrar</button>
          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterUpdate === true ? (
        <Modal onClose={onUpdateClose} header="Editar Cama" visible={isRegisterUpdate}>
          <Styles.Form onSubmit={updateBed}>
            <select
              onChange={(e) => {
                console.log('target que vem >>>', e.target.value);
                setIsUpdate(e.target.value);
              }}
            >
              {handleBedData.map((bed) => (
                <option
                  key={bed.id}
                  value={bed.id}
                >
                  {bed.nome}
                </option>

              ))}
            </select>
            <select
              value={handleBedFields.tipo_cama}
              onChange={(e) => {
                setIsBedType(e.target.value);
              }}
            >
              <option value="1">
                Solteiro
              </option>
              <option value="2">
                Beliche
              </option>
              <option value="3">
                Casal
              </option>
            </select>

            <select
              value={handleBedFields.quarto}
              onChange={(e) => {
                setIsBedRoomType(e.target.value);
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

            <select
              value={handleBedFields.status}
              onChange={(e) => {
                setIsBedStatus(e.target.value);
              }}
            >
              <option value="l">
                Livre
              </option>
              <option value="o">
                Ocupada
              </option>
            </select>
            <input
              id="name"
              value={handleBedFields.nome}
              type="text"
              required
              placeholder="Nome"
              onChange={
              (e) => setIsBedName(e.target.value)
}
            />
            <textarea
              id="Descricao"
              type="text"
              value={handleBedFields.descricao}
              placeholder="Descri????o"
              required
              onChange={(e) => setIsBedDescription(e.target.value)}
            />
            <input
              id="Valor"
              value={handleBedFields.value}
              type="text"
              placeholder="Valor"
              required
              onChange={(e) => setIsBedValue(e.target.value)}
            />
            <button type="submit">Alterar</button>

          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterDelete === true ? (
        <Modal onClose={onDeleteClose} header="Excluir Cama" visible={isRegisterDelete}>
          <Styles.Form onSubmit={deleteBed}>
            <select
              value={isDelete}
              onChange={(e) => {
                setIsDelete(e.target.value);
              }}
            >
              {handleBedData.map((bed) => (
                <option
                  key={bed.id}
                  value={bed.id}
                >
                  {bed.nome}
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
          onClick={() => { setIsRegister(!isRegister); GetBedData(); GetRoomData(); }}
        />
        <Styles.Button
          value="Alterar"
          variant="filled"
          type="submit"
          backgroundColor="#6558f5"
          onClick={() => { setIsRegisterUpdate(!isRegisterUpdate); GetBedData(); GetRoomData(); }}
        />
        <Styles.Button
          value="Excluir"
          variant="filled"
          type="submit"
          backgroundColor="#6558f5"
          onClick={() => { setIsRegisterDelete(!isRegisterDelete); GetBedData(); GetRoomData(); }}
        />
      </Styles.ContainerButtons>
    </UserProvider>
  );
}
