/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
/* import DatePicker from 'react-datepicker'; */
import { Select, Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
/*
import 'react-datepicker/dist/react-datepicker.css'; */
import 'antd/dist/antd.css';
import * as Styles from './styles';

export default function Reservation() {
  const disabledDate = (current) => (
    current && current < moment().endOf('day')
  );

  return (
    <Container>
      <Header header="Reservas" />
      <Styles.WrapperContent>
        <Styles.ReservationContainer>
          <Styles.ReservationWrapper>
            <Styles.SearchInput
              placeholder="input search text"
              onSearch={(value) => { console.log(value); }}
            />
            <Styles.SearchButton>
              Pesquisar
            </Styles.SearchButton>
          </Styles.ReservationWrapper>
          <Styles.DateContainer>

            <DatePicker
              disabledDate={disabledDate}
              onChange={(date, dateStringInitial) => {
                console.log(dateStringInitial);
              }}
            />
            <DatePicker
              disabledDate={disabledDate}
              onChange={(date, dateStringFinal) => {
                console.log(dateStringFinal);
              }}
            />

          </Styles.DateContainer>

          <Styles.SelectContainer>
            <Select placeholder="Quantidade de Pessoas">
              <option value="option1">1 pessoa</option>
              <option value="option2">2 pessoas</option>
              <option value="option3">3 pessoas</option>
              <option value="option3">4 pessoas</option>
              <option value="option3">5 pessoas</option>
              <option value="option3">6 pessoas</option>
              <option value="option3">7 pessoas</option>
              <option value="option3">8 pessoas</option>
            </Select>

          </Styles.SelectContainer>
          <Styles.CheckboxContainer>
            <CheckboxGroup>
              <Checkbox value="1 solteiro">
                1 cama solteiro
              </Checkbox>
              <Checkbox value="1 casal">
                1 cama casal
              </Checkbox>
              <Checkbox value="2 solteiros">
                1 cama Beliche
              </Checkbox>
              <Checkbox value="2 casais">
                2 camas casal
              </Checkbox>
              <Checkbox value="3 solteiros">
                3 camas solteiro
              </Checkbox>
            </CheckboxGroup>
          </Styles.CheckboxContainer>
          <Styles.ButtonContainer>
            <Styles.ButtonReservation>
              Selecionar
            </Styles.ButtonReservation>
          </Styles.ButtonContainer>
        </Styles.ReservationContainer>
      </Styles.WrapperContent>
    </Container>
  );
}
