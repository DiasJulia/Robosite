import React from 'react'
import {Navbar} from '../../components';

import { Container, FirstSection, ThirdSection, RoundLogoImg, RobotImg, RobotImg2, Row, FourthSection, Div, RowItem } from './styles';
import { RoundLogo, RobotPhotos, Trophy, MagGlasses, Chip, Trophy2, Upload, People } from '../../assets';

const HomePage: React.FC = () => (
  <div>
  <Navbar/>
  <Container>
    <FirstSection>
      <RoundLogoImg src={ RoundLogo } alt="" />
      <div>
        <h1>Pessoas que desenvolvem...</h1>
        <p>A partir da realização de parcerias, somos uma ferramenta de formação em robótica que envolve uma pluralidade de áreas do conhecimento, principalmente engenharia de hardware e software, gerando oportunidades de trabalho e pesquisa nessa área.</p>
      </div>
      <RobotImg src={ RobotPhotos } alt="" />
    </FirstSection>
    <ThirdSection>
      <h2>O que fazemos</h2>
      <Row>
        <RowItem>
          <img src={ Trophy } alt="Desenho de Troféu" />
          <h3>Competições</h3>
          <p>Nós participamos de diversas competições, como a RoboCup, a IRONCup e a LARC.</p>
        </RowItem>
        <RowItem>
          <img src={ MagGlasses } alt="Desenho de Lupa" />
          <h3>Pesquisa</h3>
          <p>Professores e estudantes pesquisando dentro dos problemas da robótica.</p>
        </RowItem>
        <RowItem>
          <img src={ Chip } alt="Desenho de Processador" />
          <h3>Desenvolvimento</h3>
          <p>Nós projetamos e desenvolvemos a eletrônica, a mecânica e a inteligência dos robôs.</p>
        </RowItem>
      </Row>
    </ThirdSection>
    <FourthSection>
      <h2>Quem somos nós</h2>
      <Row>
        <p>RobôCIn é um grupo de pesquisa e desenvolvimento do Centro de Informática da UFPE, que utiliza a robótica para desenvolver soluções. O grupo foi criado em 2015 por 12 estudantes de Engenharia da Computação com ajuda de dois professores. Edna Barros e Hansenclever Bassani. Desenvolver soluções utilizando Inteligência Artificial, Visão Computacional, Mecânica e Eletrônica aplicados na robótica.</p>
        <RobotImg2 src={ RobotPhotos } alt="" />
      </Row>
      <Row>
        <div>
          <img src={ Trophy2 } alt="Desenho de troféu" />
          <h4>Premiações</h4>
        </div>
        <div>
          <img src={ Upload } alt="Desenho de Upload" />
          <h4>Artigos publicados</h4>
        </div>
        <div>
          <img src={ People } alt="Desenho de Upload" />
          <h4>Colaboradores</h4>
        </div>
      </Row>
    </FourthSection>
  </Container>
  </div>
)

export default HomePage