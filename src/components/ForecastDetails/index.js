import React from 'react';
import { Text } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, DetailItem } from './styles';

export default function ForecastDetails() {
   return (
      <Container>
         <DetailItem>
            <Feather name='wind' size={23} color='#1ed6ff' />
            <Text>7 km/h</Text>
         </DetailItem>

         <DetailItem>
            <MaterialCommunityIcons name='weather-sunset-up' size={23} color='#1ed6ff' />
            <Text>5:22 am</Text>
         </DetailItem>

         <DetailItem>
            <MaterialCommunityIcons name='weather-sunset-down' size={23} color='#1ed6ff' />
            <Text>6:31 pm</Text>
         </DetailItem>

         <DetailItem>
            <Feather name='droplet' size={23} color='#1ed6ff' />
            <Text>65</Text>
         </DetailItem>
      </Container>
   );
}