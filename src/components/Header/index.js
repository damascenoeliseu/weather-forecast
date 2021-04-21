import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, Date, City, Temperature } from './styles';

export default function Header({ background, icon, weather }) {
   const { results } = weather;
   
   return (
      <Container colors={background}>
         <Date>{results.date}</Date>
         <City>{results.city_name}</City>
         <Ionicons name={icon.name} color={icon.color} size={150} />
         <Temperature>{results.temp}°</Temperature>
      </Container>
   );
}