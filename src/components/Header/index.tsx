import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeAuth } from '../../store/reducers/auth';

import Button from '@mui/material/Button';

import Ul from '../../UI/ul';

import './style.scss';

const Header = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(state => state.auth.isAuth);
    
    return (
        <header className="Header">
            <Button
                variant="text"
                onClick={() => dispatch(changeAuth(isAuth))}
            >
                {isAuth ? 'Войти' : 'Выйти'}
            </Button>
            <Ul className='Header__news-list'/>
        </header>
    )
}

export default Header;