import React, {useState} from 'react'
import { Container, Nav, LogoImg } from './styles';

import { Logo } from '../../assets';

const Navbar: React.FC = () => {
    const [page, setPage] = useState(window.location.pathname.split('/')[1] || 'home');
    
    return (
    <Container>
        <LogoImg src={Logo} alt="Logo do Robocin" />
        <Nav>
            <ul>
                <li><a href="">Início</a></li>
                <li><a href="">Categorias</a></li>
                <li><a href="">Equipe</a></li>
                <li><a href="">Publicações</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </Nav>
    </Container>
)
}

export default Navbar