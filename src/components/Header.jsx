import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo">RP Store</Link>
                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
