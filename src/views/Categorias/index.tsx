import React from 'react'
import {Footer} from '../../components'
import {Badge, Container, Details, FirstSection, Row, SubContainer, TableLine} from './styles'


const CategoriasPage: React.FC = () => {
  return (
    <Container>
        <FirstSection>
            <h1>CATEGORIAS</h1>
            <p>Nossas sub-equipes cooperam para administrar, desenvolver e competir em várias categorias diferentes, como SSL, VSSS, Simulação 2D e Drone.</p>
        </FirstSection>
        <Row justifyContent='center'>
            <Badge>Small size league</Badge>
            <Badge>very Small size league</Badge>
            <Badge>Simulação 2d</Badge>
            <Badge>drone</Badge>
        </Row>
        <hr />
        <SubContainer>
        <div>
            <h2>Small Size League</h2>
            <p>Small Size League (SSL) é uma competição que requer o desenvolvimento de várias áreas. Nós desenvolvemos o modelo mecânico, os sistemas eletrônicos e de comunicação e a inteligência artifical dos robôs. Um jogo de SSL ocorre entre duas equipes de seis robôs cada. Os robôs tem dimensões limitadas, o robô deve caber dentro de um círculo de 180 mm de diâmetro e não deve ter mais de 15 cm. Todos os objetos no campo são identificados e normalizados pelos sistema de visão que processa os dados proveniente pelas 4 cameras.</p>
            <Details>
                <summary>SSL - Resultados</summary>
                <TableLine>
                <p>COMPETIÇÃO</p>
                <p>2022</p>
                <p>2021</p>
                <p>2020</p>
                <p>2019</p>
                <p>2018</p>
                </TableLine>
                <TableLine>
                    <p>RoboCup</p>
                    <p>10º</p>
                    <p>7º</p>
                    <p>Adiado</p>
                    <p>9º</p>
                    <p>N/A</p>
                </TableLine>
                <TableLine>
                    <p>LARC</p>
                    <p></p>
                    <p>1º</p>
                    <p>3º</p>
                    <p>2º</p>
                    <p>4º</p>
                </TableLine>
            </Details>
        </div>
        </SubContainer>
        <Footer/>
    </Container>
  )
}

export default CategoriasPage