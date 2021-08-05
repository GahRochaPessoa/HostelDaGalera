/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';

import * as Styles from './styles';
import { api } from '../../../pages/api/api';

export function ReservationForm() {
  const [handleEmployeeData, setHandleEmployeeData] = useState([]);
  const [handleGuestData, setHandleGuestData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [selectedGuest, setSelectedGuest] = useState();

  async function registerAssociation(event) {
    event.preventDefault();
    const dataAssociation = {
      hospede: selectedGuest,
      funcionario: selectedEmployee,
    };
    try {
      await api.post('/reserva/', dataAssociation);
      alert('Associação registrada com Sucesso');
      setIsRegister(false);
    } catch (error) {
      alert('Error ao fazer associação, tente novamente');
    }
  }

  async function GetEmployeeData() {
    const { data: employee } = await api.get('/funcionario/');
    if (!employee) {
      return {
        notFound: true,
      };
    }
    setHandleEmployeeData(employee);
  }
  async function GetGuestData() {
    const { data: hospede } = await api.get('/hospede/');
    if (!hospede) {
      return {
        notFound: true,
      };
    }
    setHandleGuestData(hospede);
  }

  useEffect(() => {
    GetEmployeeData();
    GetGuestData();
  }, []);

  useEffect(() => {
    setSelectedEmployee(handleEmployeeData[0]?.id);
    setSelectedGuest(handleGuestData[0]?.id);
  }, [handleEmployeeData, handleGuestData]);

  console.log(selectedEmployee);
  console.log(selectedGuest);

  return (

    <Styles.Container>
      <Styles.Form onSubmit={registerAssociation}>
        <h3>Funcionário:</h3>
        <select
          onChange={(e) => {
            setSelectedEmployee(e.target.value);
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
        <h3>Hóspede:</h3>
        <select
          onChange={(e) => {
            setSelectedGuest(e.target.value);
          }}
        >
          {handleGuestData.map((room) => (
            <option
              key={room.id}
              value={room.id}
            >
              {room.nome}
            </option>
          ))}
        </select>

        <button type="submit">Registrar</button>
      </Styles.Form>
    </Styles.Container>

  );
}
