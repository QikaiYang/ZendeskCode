import React, { useState } from 'react';
import Tickets from './components/Tickets';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ticketsPerPage] = useState(25);
    const [print, setPrint] = useState(false);
    const [domain, setDomain] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [flag, setFlag] = useState(true);
    const [error, setError] = useState(null)

    function getDomain(val) {
        setDomain(val.target.value)
        setPrint(false)
    }

    function getEmail(val) {
        setEmail(val.target.value)
        setPrint(false)
    }

    function getPassword(val) {
        setPassword(val.target.value)
        setPrint(false)
    }

    const fetchapi = async () => {
        try {
            const res = await fetch("/get_all_tickets/" + btoa(domain) + "/" + btoa(email) + "/" + btoa(password));
            const data = await res.json();

            if (data.stat === 200) {
                setTickets(data.content.tickets);
                setPrint(true);
            } else if (data.stat === 400 || data.stat === 404 || data.stat === 401) {
                setPrint(true);
                setFlag(false);
                setError("Incorrect information. Please try again:)");
            }
        } catch (err) {
            setPrint(true);
            setFlag(false);
            setError("Unexpected Program error:(");
        }
    }

    // Get current tickets
    const indexOfLastTicket = currentPage * ticketsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
    const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='container mt-5'>
            <h1 className='text-primary mb-3'>Check your tickets!</h1>
            {
                flag ?
                    <section>
                        {
                            print ?
                                null :
                                <section>
                                    <h6>Enter your user domain</h6>
                                    <input placeholder="domain" type="text" onChange={getDomain} />
                                    <h6>Enter your email</h6>
                                    <input placeholder="email" type="text" onChange={getEmail} />
                                    <h6>Enter your password</h6>
                                    <input placeholder="password" type="text" onChange={getPassword} />
                                    <button onClick={fetchapi} >Go!</button>
                                </section>
                        }
                        {
                            print ?
                                <section>
                                    <Pagination
                                        ticketsPerPage={ticketsPerPage}
                                        totalTickets={tickets.length}
                                        paginate={paginate}
                                    />
                                    <Tickets tickets={currentTickets} />
                                </section>
                                : null
                        }
                    </section>
                    : <h6 className='text-primary mb-3'>{error}</h6>
            }
        </div>
    );
};

export default App;