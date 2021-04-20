import React from 'react';

import { Container, Date, City, Icon, Temperature } from './styles';

export default function Header() {
   return (
      <Container colors={['#1ed6ff', '#97c1ff']}>
         <Date>04/19/2021</Date>
         <City>Barra Mansa</City>
         <Icon name="cloud" color="#fff" size={150}/>
         <Temperature>22°</Temperature>
      </Container>
   );
}