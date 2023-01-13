import React, {useState} from 'react'
import { Container, Nav, LogoImg } from './styles';

import { Logo } from '../../assets';
import {Link} from 'react-router-dom';

const Navbar: React.FC = () => {
    const [page, setPage] = useState(window.location.pathname.split('/')[1] || 'home');

    console.log(page);
    
    return (
    <Container>
        <LogoImg src={Logo} alt="Logo do Robocin" />
        <Nav>
            <ul>
                <li className={page==="home"? 'active': ''} onClick={()=>setPage("home")}>
                    <Link to="/">Início</Link>
                </li>
                <li className={page==="categorias"? 'active': ''} onClick={()=>setPage("categorias")}>
                    <Link to="/categorias">Categorias</Link>
                </li>
                <li className={page==="equipe"? 'active': ''} onClick={()=>setPage("equipe")}>
                    <Link to="/equipe">Equipe</Link>
                </li>
                <li className={page==="publicacoes"? 'active': ''} onClick={()=>setPage("publicacoes")}>
                    <Link to="/publicacoes">Publicações</Link>
                </li>
                <li className={page==="blog"? 'active': ''} onClick={()=>setPage("")} >
                    <Link to="/">Blog</Link>
                </li>
            </ul>
        </Nav>
    </Container>
)
}

export default Navbar