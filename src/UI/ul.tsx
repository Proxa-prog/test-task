import Link from "@mui/material/Link";
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import { FC } from "react";
import Header from "../components/Header";

interface UlProps {
    className: string;
}

const Ul: FC <UlProps> = (props) => {
    const {
        className,
    } = props;
    
    return (
            <ul className={className}>
                <li className='Header__news-item'><Link to='/' component={RouterLink}>Профиль</Link></li>
                <li className='Header__news-item'><Link to='/' component={RouterLink}>Новости</Link></li>
                <li className='Header__news-item'><Link to='/' component={RouterLink}>Логин</Link></li>
            </ul>
    )
}

export default Ul;