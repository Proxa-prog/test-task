import Button from '@mui/material/Button';
import './style.scss';

const Header = () => {
    return (
        <header className="Header">
            <Button variant="text">{true ? 'Войти' : 'Выйти'}</Button>
        </header>
    )
}

export default Header;