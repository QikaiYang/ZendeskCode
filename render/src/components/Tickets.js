import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Tickets = ({ tickets }) => {
    return (
        <ul className='list-group mb-4'>
            {tickets.map(ticket => (
                <li key={ticket.id} className='list-group-item'>
                    <Popup trigger={<button> {ticket.subject} </button>} position="bottom right" modal nested>
                        <div className="header">
                            <h3>{ticket.subject}</h3>
                        </div>
                        <div className="content">
                            {ticket.description}
                        </div>
                        <br />
                        <div className="header">
                            Ticket created at {ticket.created_at}
                        </div>
                        <div className="header">
                            Last updated at {ticket.updated_at}
                        </div>
                    </Popup>
                </li>
            ))}
        </ul>
    );
};

export default Tickets;
