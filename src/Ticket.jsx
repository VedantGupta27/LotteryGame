import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ticket}){
    return(
            <div className="Ticket">
                <h2 className="ticket-title">Ticket</h2>
                <div className="ticket-row">
                    {ticket.map((num, idx) => (
                        <TicketNum num={num} key={idx} />
                    ))}
                </div>
            </div>
    );
}