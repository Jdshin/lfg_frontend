import {Link} from 'react-router-dom'

function Nav(props) {
    return (
        <header>
            <nav className="nav">
                <Link to="/">
                    <div>Home</div>    
                </Link>
                <Link to="/explore">
                    <div>Explore</div>    
                </Link>
            </nav>
        </header>
    );
}

export default Nav;