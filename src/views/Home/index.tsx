import React from 'react'
import {Navbar} from '../../components';

import { Container, Section } from './styles';
import { RoundLogo } from '../../assets';

const HomePage: React.FC = () => (
  <div>
  <Navbar/>
  <Container>
    <Section>
      <img src={RoundLogo} alt="" />
      <div>
        <h1>Pessoas que desenvolvem...</h1>
        <p>A partir da realização de parcerias, somos uma ferramenta de formação em robótica que envolve uma pluralidade de áreas do conhecimento, principalmente engenharia de hardware e software, gerando oportunidades de trabalho e pesquisa nessa área.</p>
      </div>
      
    </Section>
  </Container>
  </div>
)

export default HomePage