import { Button, TableCell, TextField } from '@material-ui/core'
import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #828282;
  box-sizing: border-box;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  grid-area: table;
  margin: 1em auto;
  height: 37em;
  width: 60em;
  display: grid;
  grid-template-areas:
    'Balance Elements'
    'Balance Grafic'
    'Balance Table';
  grid-template-rows: 8em 10em 11em;
  grid-template-columns: 11em 1fr;
`
export const Balance = styled.div`
  grid-area: Balance;
  height: 35em;
  border-right: 1px solid #828282;
  margin: 1em 1em 1em 2em;
`
export const Elements = styled.div`
  grid-area: Elements;
  margin: 1em;
`
export const Grafic = styled.div`
    grid-area: Grafic;
    width: 45em;
    margin: 0.5em 0 0 1em;
`
export const Table = styled.div`
  grid-area: Table;
  height: 15em;
  margin: 1em 1em 1em 0;
  padding: 0.5em 0 1em 1.5em;
  overflow: scroll;
  overflow-x: hidden;
  background-color: whitesmoke;
  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.38);
    border-radius: 10px;
  }
`
export const StyledTextField = styled(TextField)`
  margin: 0 1em 1em 1em !important; 
`
export const StyledTableCell = styled(TableCell)`
  width: 14em !important;
`
export const LogoutButton = styled(Button)`
  margin-top: 30em !important;
`
export const ButtonBox = styled.div`
  margin: 0 0 1em 7em;
  width: 15em;
  display: flex;
  justify-content: space-around;
`
export const SearchBox = styled.div`
  display: flex;
`
