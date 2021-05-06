import React, { useState, useCallback } from 'react';
import { Text, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api, { key } from '../../services/api';

import ForecastDetails from '../../components/ForecastDetails';
import Header from '../../components/Header';

import { condition } from '../../utils/condition';

import {
   Container,
   BackButton,
   SearchBox,
   Input,
   SearchIcon,
} from './styles';

export default function Search() {
   const navigation = useNavigation();

   const [input, setInput] = useState('');
   const [error, setError] = useState(null);
   const [weather, setWeather] = useState(null);
   const [icon, setIcon] = useState({ name: 'cloud', headerColor: '#fff', color: '#1ec9ff' });
   const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

   const handleSearch = useCallback(async () => {
      const { data } = await api.get(`weather?key=${key}&city_name=${input}`);
      const { results } = data;

      if (data.by === 'default') {
         setError('City not found!');
         setInput('');
         setWeather(null);
         Keyboard.dismiss();

         return;
      }

      setInput('');
      Keyboard.dismiss();

      if (results.currently === 'noite') {
         setBackground(['#0c3741', '#0f2f61']);
      }
      setWeather(data);
      setIcon(condition(results.condition_slug));
   }, [process.env.HG_KEY, input]);

   return (
      <Container>
         <BackButton onPress={navigation.goBack}>
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

         {weather && (
            <>
               <Header background={background} icon={icon} weather={weather} />
               <ForecastDetails weather={weather} />
            </>
         )}
      </Container>
   );
}