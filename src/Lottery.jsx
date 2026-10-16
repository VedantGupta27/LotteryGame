import { useState } from "react"
import { genTicket ,sum} from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css";

export default function Lottery({n, WinCondition}){
    let[ticket, setTicket] = useState(genTicket(n));

    let isWinning = WinCondition(ticket);

    let buyTicket = () =>{
        setTicket(genTicket(n))
    }
    return (
    <div className="Lottery-container">
        <h1>Lottery Game</h1>
        <Ticket ticket={ticket}/>
        <button className="counter" onClick={buyTicket}>Buy New Ticket</button>
        <h3>{isWinning && "Congratulations you won !"}</h3>
    </div>
    );
}