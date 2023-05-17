import './Header.scss';
import logo from '../../assets/images/BrainFlix-logo.svg';
import Upload from '../Upload/Upload';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="" className="header__logo" />
            <Upload />
        </header>
    );
}

export default Header;
