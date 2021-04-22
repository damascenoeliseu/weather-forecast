import React, { useState, useCallback } from 'react';
import { Text, View, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api, { key } from '../../services/api';

import ForecastDetails from '../../components/ForecastDetails';

import {
   Container,
   BackButton,
   SearchBox,
   Input,
   SearchIcon,
   Header,
   Date,
   City,
   Temperature
} from './styles';

export default function Search() {
   const navigation = useNavigation();

   const [input, setInput] = useState('');
   const [city, setCity] = useState(null);
   const [error, setError] = useState(null);

   const handleSearch = useCallback(async () => {
      const { data } = await api.get(`weather?key=${key}&city_name=${input}`)

      if (data.by === 'default') {
         setError('City not found!');
         setInput('');
         setCity(null);
         Keyboard.dismiss();

         return;
      }

      setCity(data);
      setInput('');
      Keyboard.dismiss();
   }, [key, input]);

   return (
      <Container>
         <BackButton onPress={() => navigation.navigate('Home')}>
            <Feather name='chevron-left' size={32} color='#000' />
            <Text style={{ fontSize: 22 }}>Back</Text>
         </BackButton>

         <SearchBox>
            <Input
               value={input}
               onChangeText={value => setInput(value)}
               placeholder={'e.g. Belo Horizonte, MG'}
            />
            <SearchIcon onPress={handleSearch}>
               <Feather name='search' size={22} color='#fff' />
            </SearchIcon>
         </SearchBox>

         {error && <Text style={{ marginTop: 25, fontSize: 18 }}>{error}</Text>}

         {city && (
            <Header colors={['#1ed6ff', '#97c1ff']}>
               <Date>{city.results.date}</Date>
               <City>{city.results.city_name}</City>

               <View>
                  <Temperature>{city.results.temp}°</Temperature>
               </View>

               <ForecastDetails weather={city} />
            </Header>
         )}

      </Container>
   );
}