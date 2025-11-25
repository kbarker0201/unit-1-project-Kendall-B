import { Link } from 'react-router';

function ContactPage() {

    const games = [
        { id: 1, name: 'Mystery of the Seven Keys', description: 'Help Nancy investigate the theft of a client\'s heirloom neckalce.' },
        { id: 2, name: 'The Deadly Device', description: 'Help Nancy investigate a physicist\'s death at a high-tech research lab.' },
        { id: 3, name: 'The Secret of Shadow Ranch', description: 'Help Nancy solve a mystery at a ranch in Arizona, which involves a legendary outlaw, Dirk Valentine, and a curse.' },
        { id: 4, name: 'Danger by Design', description: 'Help Nancy go undercover as an intern in Paris to investigate the strange behavior of a fashion designer named Minette.' },
    ]
    return (
        <>
            <div className="topnav">
                <Link to="/">Home </Link>
                <Link to="/about">About </Link>
                <Link to="/contact">Contact </Link>
            </div>
            <h1>Contact Page</h1>
            <p className='contact'>Contact the creator: kbarker0201@gmail.com</p>
            <div className="contact-table">
                <h1>Other Nancy Drew games:</h1>
                <table>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game) => (
                            // Use a unique key for each row for efficient updates in React
                            <tr key={game.id}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{game.name}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{game.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ContactPage;