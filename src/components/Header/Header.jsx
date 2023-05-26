import './Header.scss';
import logo from '../../assets/images/BrainFlix-logo.svg';

import { Link } from 'react-router-dom';
import Upload from '../Upload/Upload';

// This component is to create a header to be used in the pages
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
