import './Header.scss';
import logo from '../../assets/images/BrainFlix-logo.svg';

import { Link } from 'react-router-dom';
import Upload from '../Upload/Upload';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__link">
                <img src={logo} alt="" className="header__logo" />
            </Link>
            <Upload />
        </header>
    );
}

export default Header;
