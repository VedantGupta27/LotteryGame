import './App.css'
import Ticket from './Ticket';
import Lottery from './Lottery';
import './Ticket.css'
import TicketNum from './TicketNum';
import {sum} from './helper';

function App() {
let WinCondition = (ticket) => {
  return ticket.every((num) => num === ticket[0]);
}

  return (
    <>
    
    <Lottery n={3} WinningSum = {15} WinCondition = {WinCondition}/>
    </>
  )
} 

export default App;
