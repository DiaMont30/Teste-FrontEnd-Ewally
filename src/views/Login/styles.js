import styled from 'styled-components'

export const LoginContainer = styled.div`
    max-width: 25em;
    margin: 10em auto;
    text-align: center;
    @media (max-width: 400px) {
        max-width: 21em;
  }
`


export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 28vh;
    justify-content: space-around;
    margin-bottom: 1em;
    gap: 1em;
`
