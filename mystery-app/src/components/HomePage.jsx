import { Link } from 'react-router';

function HomePage() {
    return (
        <>
            <h1>Nancy Drew 🔍 and the Mystery of the Missing Manuscript</h1>
            <div className="topnavhome">
                <Link to="/">Home </Link>
                <Link to="/about">About </Link>
                <Link to="/contact">Contact </Link>
            </div>
            <div>
                <h2 className='home-text'>The owners of Hawthorne Mansion have enlisted your help to find their family's 
                    missing manuscript. 
                </h2>
            </div>
            <div>
                <button className="choice-buttons">
                    <Link to="/game">Start Game</Link>
                </button>
                <button className="choice-buttons">Login</button>
            </div>
        </>
    )
}

export default HomePage;