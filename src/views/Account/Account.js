import { TableRow, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { Card, Balance, Elements, Table, StyledTextField, StyledTableCell, ButtonBox, LogoutButton, SearchBox, Grafic } from './styles'
import { useProtectedPage } from '../../hooks/index'
import { useRequestData } from '../../hooks/useRequestData'
import { format } from 'date-fns'
import { logout } from '../../router/coordinator'
import { BarChart } from '../../components/BarChart'

const AccountPage = () => {
  //Hooks
  const history = useHistory()
  useProtectedPage()

  //Form dates logic
  const initialValues = { initialDate: '2019-01-01', finalDate: '2019-01-31' }
  const [dates, setDates] = useState(initialValues)
  const { form, onChange, reset } = useForm({ initialDate: '', finalDate: '' })
  const query = `?initialDate=${dates.initialDate}&finalDate=${dates.finalDate}`

  const sendDates = () => {
    setDates(form)
    reset()
  }

  const resetDates = () => {
    setDates(initialValues)
    reset()
  }

  //Queries
  const [{ balance }] = useRequestData('/account/balance', true)
  const [{ statement }] = useRequestData(`/account/statements${query}`)

  //Date Formatter
  const dateFormatter = (date) => {
    return format(new Date(date), ' dd/MM/yyyy')
  }

  return (
    <Card>
      <Balance>
        <h3>Saldo:</h3>
        <span>{`R$: ${balance / 100}`}</span>
        <LogoutButton variant="contained" color='primary' onClick={() => logout(history)}>Logout</LogoutButton>
      </Balance>
      <Elements>
        <h3>Extrato:</h3>
        <SearchBox>
          <div>
            <StyledTextField
              type='date'
              onChange={onChange}
              name='initialDate' />
            <StyledTextField
              type='date'
              onChange={onChange}
              name='finalDate' />
          </div>
          <ButtonBox>
            <Button variant="contained" color='primary' onClick={sendDates}>Pesquisar</Button>
            <Button variant="contained" color='primary' onClick={resetDates}>Resetar</Button>
          </ButtonBox>
        </SearchBox>
      </Elements>
'     <Grafic>
         <BarChart statements={statement}/>
      </Grafic>
'      <Table>
        {statement?.map((row) => (
          <TableRow
            key={row.id}
          >
            <StyledTableCell >
              {dateFormatter(row.createdAt)}
            </StyledTableCell>
            <StyledTableCell align="right">{row.operationType}</StyledTableCell>
            <StyledTableCell align="right">{`R$ ${row.amount / 100}`}</StyledTableCell>
          </TableRow>
        ))}
      </Table>
    </Card>
  );
}

export default AccountPage;