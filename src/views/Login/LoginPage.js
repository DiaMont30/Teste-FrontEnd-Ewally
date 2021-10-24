import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useForm } from '../../hooks/useForm'
import { LoginContainer, FormContainer } from "./styles"
import { login } from '../../services/login'
import { useHistory } from 'react-router-dom'

function LoginPage() {
  const { form, onChange, reset } = useForm({ username: "", password: "" })
  const history = useHistory()

  const handleSubmission = (e) => {
    e.preventDefault()
    login(form, history)
    reset()
  }


  return (
    <LoginContainer>
      <h1>LOGIN</h1>
      <FormContainer onSubmit={handleSubmission}>
        <TextField
          required
          label="Usuário"
          onChange={onChange}
          name='username'
        />
        <TextField
          required
          type='password'
          name='password'
          label="Password"
          onChange={onChange}
        />

        <Button variant="contained" color='primary' type='submit'>Entrar</Button>
      </FormContainer>
    </LoginContainer>
  );
}

export default LoginPage;