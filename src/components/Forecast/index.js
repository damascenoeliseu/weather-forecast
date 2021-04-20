import React from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { condition } from '../../utils/condition';

import { Container, Date, Temperature } from './styles';

export default function Forecast({ data }) {
   let icon = condition(data.condition);

   return (
      <Container>
         <Date>{data.date}</Date>
         <Ionicons name={icon.name} color={icon.color} size={25} />

         <Temperature>
            <Text>{data.min}°</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.max}°</Text>
         </Temperature>
      </Container>
   );
}