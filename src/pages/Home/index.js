import React from 'react';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import ForecastDetails from '../../components/ForecastDetails';

import { Container, List } from './styles';

export default function Home() {
   return (
      <Container>
         <Menu />
         <Header />
         <ForecastDetails />
         <List />
      </Container>
   );
}