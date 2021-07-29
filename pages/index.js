/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */

import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField } from '@material-ui/core';
import * as Styles from '../styles/styles';
import logo from '../assets/logo.png';
import { useAuth } from '../contexts/auth';

const schema = yup.object().shape({
  user: yup.string().required(),
  password: yup.string().min(4).max(20).required(),
});

export default function Home() {
  const router = useRouter();
  const { setUser } = useAuth();
  const {
    handleSubmit, control, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function onSubmit(data) {
    setUser(data.user);
    sessionStorage.setItem('user', data.user);
    setTimeout(() => {
      router.push('/Home');
    }, 2000);
  }
  return (

    <Styles.LoginContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} height={150} width={250} />
        <Controller
          control={control}
          type="name"
          name="user"
          render={({ field }) => (
            <TextField
              size="small"
              {...field}
              label="Usuário"
              variant="outlined"
              error={!!errors.user}
              helperText={errors.user ? errors.user?.message : ''}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              size="small"
              {...field}
              label="Senha"
              type="password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
            />
          )}
        />
        <input type="submit" value="ENTRAR" />
      </form>
    </Styles.LoginContainer>
  );
}
