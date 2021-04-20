import React from 'react';
import { Text } from 'react-native'

import { Container, Icon, DetailItem, MaterialIcon } from './styles';

export default function ForecastDetails() {
   return (
      <Container>
         <DetailItem>
            <Icon name='wind' size={23} color='#1ed6ff' />
            <Text>7 km/h</Text>
         </DetailItem>

         <DetailItem>
            <MaterialIcon name='weather-sunset-up' size={23} color='#1ed6ff' />
            <Text>5:22 am</Text>
         </DetailItem>

         <DetailItem>
            <MaterialIcon name='weather-sunset-down' size={23} color='#1ed6ff' />
            <Text>6:31 pm</Text>
         </DetailItem>

         
         <DetailItem>
            <Icon name='droplet' size={23} color='#1ed6ff' />
            <Text>65</Text>
         </DetailItem>
      </Container>
   );
}