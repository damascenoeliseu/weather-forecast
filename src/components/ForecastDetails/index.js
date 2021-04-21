import React from 'react';
import { Text } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, DetailItem } from './styles';

export default function ForecastDetails({ weather }) {
   const { results } = weather;

   return (
      <Container>
         <DetailItem>
            <Feather name='wind' size={23} color='#1ed6ff' />
            <Text>{results.wind_speedy}</Text>
         </DetailItem>

         <DetailItem>
            <MaterialCommunityIcons name='weather-sunset-up' size={23} color='#1ed6ff' />
            <Text>{results.sunrise}</Text>
         </DetailItem>

         <DetailItem>
            <MaterialCommunityIcons name='weather-sunset-down' size={23} color='#1ed6ff' />
            <Text>{results.sunset}</Text>
         </DetailItem>

         <DetailItem>
            <Feather name='droplet' size={23} color='#1ed6ff' />
            <Text>{results.humidity}</Text>
         </DetailItem>
      </Container>
   );
}