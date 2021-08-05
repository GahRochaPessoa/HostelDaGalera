/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import {
  BsPlusSquare,
  BsXSquare, BsFileEarmarkArrowUp,
} from 'react-icons/bs';
import { Modal } from '../../Modal';
import * as Styles from './styles';
import { UserProvider } from '../../../contexts/users';
import { api } from '../../../pages/api/api';

export function ReservationForm() {
  const [handleBedData, setHandleBedData] = useState([]);
  const [handleReservationData, setHandleReservationData] = useState([]);
  const [handleReservationBedData, setHandleReservationBedData] = useState([]);
  const [isRegister, setIsRegister] = useState(false);
  const [isRegisterUpdate, setIsRegisterUpdate] = useState(false);
  const [isRegisterDelete, setIsRegisterDelete] = useState(false);
  const [isDelete, setIsDelete] = useState();
  const [isUpdate, setIsUpdate] = useState(1);
  const [Bed, setBed] = useState(1);
  const [reservation, setReservation] = useState();
  const [reservationStatus, setReservationStatus] = useState();
  const [reservationDataBegin, setReservationDataBegin] = useState();
  const [reservationDataFinish, setReservationDataFinish] = useState();

  function onRegisterClose() {
    setIsRegister(false);
  }
  function onUpdateClose() {
    setIsRegisterUpdate(false);
  }
  function onDeleteClose() {
    setIsRegisterDelete(false);
  }
  async function registerReservation(event) {
    event.preventDefault();
    const dataRegistration = {
      cama: Bed,
      reserva: reservation,
      status_reserva: reservationStatus,
      inicio: reservationDataBegin,
      fim: reservationDataFinish,
    };
    try {
      await api.post('/reservacama/', dataRegistration);
      alert('Reserva efetuada com Sucesso');
      setIsRegister(false);
    } catch (error) {
      alert('Erro ao efetuar reserva, tente novamente');
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

  async function GetBedReservationData() {
    const { data: reservationBedData } = await api.get('/reservacama/');
    if (!reservationBedData) {
      return {
        notFound: true,
      };
    }
    setHandleReservationBedData(reservationBedData);
  }
  async function GetReservationData() {
    const { data: reservationData } = await api.get('/reserva/');
    if (!reservationData) {
      return {
        notFound: true,
      };
    }
    setHandleReservationData(reservationData);
    /* console.log('Fucking Quarto maldito >>>>', handleRoomData); */
  }

  async function deleteBedReservation(event) {
    event.preventDefault();
    try {
      await api.delete(`/reservacama/${isDelete}/`);
      alert('Reserva deletada com Sucesso');
      await GetBedData();
      setIsRegister(false);
    } catch (error) {
      alert('Error ao apagar reserva, tente novamente');
    }
  }

  async function updateReservation(event) {
    event.preventDefault();
    const dataRegistration = {
      cama: Bed,
      reserva: reservation,
      status_reserva: reservationStatus,
      inicio: reservationDataBegin,
      fim: reservationDataFinish,
    };
    try {
      await api.put(`/reservacama/${isUpdate}/`, dataRegistration);
      alert('Reserva alterada com sucesso');

      setIsRegister(false);
    } catch (error) {
      alert('Erro ao apagar reserva, tente novamente');
    }
  }

  async function updateReservationFields() {
    const { data: reservationFields } = await api.get(`/reservacama/${isUpdate}/`);
    setBed(reservationFields.cama);
    setReservation(reservationFields.reserva);
    setReservationStatus(reservationFields.status_reserva);
    setReservationDataBegin(reservationFields.inicio);
    setReservationDataFinish(reservationFields.fim);
  }

  useEffect(() => {
    updateReservationFields();
  }, [isUpdate]);

  console.log('lkasjd', handleReservationData);
  return (
    <UserProvider value={handleBedData}>
      {isRegister === true ? (
        <Modal onClose={onRegisterClose} header="Registrar Reserva" visible={isRegister}>
          <Styles.Form onSubmit={registerReservation}>

            <select
              onChange={(e) => {
                setBed(e.target.value);
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
              onChange={(e) => {
                setReservation(e.target.value);
              }}
            >
              {handleReservationData.map((reservationData) => (
                <option
                  key={reservationData.id}
                  value={reservationData.id}
                >
                  {reservationData.hospede}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => {
                setIsBedStatus(e.target.value);
              }}
            >
              <option value={1}>
                Pagar 100% na reserva
              </option>
              <option value={2}>
                Pagar 50% na reserva
              </option>
            </select>
            <input
              type="date"
              required
              onChange={
              (e) => setReservationDataBegin(e.target.value)
}
            />
            <input
              type="date"
              required
              onChange={
              (e) => setReservationDataFinish(e.target.value)
}
            />
            <button type="submit">Registrar</button>
          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterUpdate === true ? (
        <Modal
          onClose={onUpdateClose}
          header="Editar Reserva"
          visible={isRegisterUpdate}
        >
          <Styles.Form onSubmit={updateReservation}>
            <select
              value={isUpdate}
              onChange={(e) => {
                setIsUpdate(e.target.value);
              }}
            >
              {handleReservationBedData.map((bed) => (
                <option
                  key={bed.id}
                  value={bed.id}
                >
                  {bed.id}
                </option>
              ))}
            </select>
            <select
              value={Bed}
              onChange={(e) => {
                setBed(e.target.value);
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

            <input
              value={reservation}
              onChange={(e) => {
                setReservation(e.target.value);
              }}
            />

            <select
              value={reservationStatus}
              onChange={(e) => {
                setReservationStatus(e.target.value);
              }}
            >
              <option value={1}>
                Pagar 100% na reserva
              </option>
              <option value={2}>
                Pagar 50% na reserva
              </option>
            </select>
            <input
              value={reservationDataBegin}
              type="date"
              required
              onChange={
              (e) => setReservationDataBegin(e.target.value)
}
            />
            <input
              type="date"
              required
              value={reservationDataFinish}
              onChange={
              (e) => setReservationDataFinish(e.target.value)
}
            />
            <button type="submit">Registrar</button>
          </Styles.Form>
        </Modal>
      ) : null}

      {isRegisterDelete === true ? (
        <Modal
          onClose={onDeleteClose}
          header="Excluir Reserva"
          visible={isRegisterDelete}
        >
          <Styles.Form onSubmit={deleteBedReservation}>
            <select
              value={isDelete}
              onChange={(e) => {
                setIsDelete(e.target.value);
              }}
            >
              {handleReservationBedData.map((bed) => (
                <option
                  key={bed.id}
                  value={bed.id}
                >
                  {bed.id}
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
          onClick={
            () => {
              setIsRegister(!isRegister);
              GetBedData();
              GetReservationData();
            }
}
        >
          <Styles.ButtonWrapper>
            <BsPlusSquare id="buttonIcon" />
            <h3>
              Cadastrar Reserva
            </h3>
          </Styles.ButtonWrapper>
        </Styles.Button>
        <Styles.Button
          value="Alterar"
          variant="filled"
          type="submit"
          backgroundColor="#DC6128"
          onClick={() => {
            setIsRegisterUpdate(!isRegisterUpdate);
            GetBedData();
            GetBedReservationData();
          }}
        >
          <Styles.ButtonWrapper>
            <BsFileEarmarkArrowUp size="1.5em" id="buttonIcon" />
            <h3>
              Alterar Reserva
            </h3>
          </Styles.ButtonWrapper>
        </Styles.Button>
        <Styles.Button
          value="Excluir"
          variant="filled"
          type="submit"
          backgroundColor="#DC6128"
          onClick={() => {
            setIsRegisterDelete(!isRegisterDelete);
            GetBedData();
            GetBedReservationData();
          }}
        >
          <Styles.ButtonWrapper>
            <BsXSquare id="buttonIcon" />
            <h3>
              Excluir Reserva
            </h3>
          </Styles.ButtonWrapper>
        </Styles.Button>
      </Styles.ContainerButtons>
    </UserProvider>
  );
}
