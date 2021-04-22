import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import ForecastDetails from '../../components/ForecastDetails';
import Forecast from '../../components/Forecast';

import { condition } from '../../utils/condition';

import api, { key } from '../../services/api';

import { Container, List, LoadingData } from './styles';

export default function Home() {
   const [errorMessage, setErrorMessage] = useState(null);
   const [loading, setLoading] = useState(true);
   const [weather, setWeather] = useState([]);
   const [icon, setIcon] = useState({ name: 'cloud', headerColor: '#fff', color: '#1ec9ff' });
   const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

   useEffect(() => {
      (async () => {
         const { status } = await Location.requestBackgroundPermissionsAsync();
         if (status !== 'granted') {
            setErrorMessage('Permission denied to access location.');
            setLoading(false);
            return;
         }

         const { coords } = await Location.getCurrentPositionAsync({});
         const { data } = await api.get(`weather?key=${key}&lat=${coords.latitude}&lon=${coords.longitude}`);
         setWeather(data);

         const { results } = data;

         if (results.currently === 'noite') {
            setBackground(['#0c3741', '#0f2f61']);
         }

         setIcon(condition(results.condition_slug));
         setLoading(false);
      })();
   }, []);

   if (loading) {
      return (
         <Container>
            <LoadingData>Loading data...</LoadingData>
         </Container>
      );
   }

   return (
      <Container>
         <Menu />
         <Header background={background} icon={icon} weather={weather} />
         <ForecastDetails weather={weather} />
         <List
            horizontal={true}
            data={weather.results.forecast}
            keyExtractor={item => item.date}
            renderItem={({ item }) => <Forecast data={item} />}
         />
      </Container>
   );
}