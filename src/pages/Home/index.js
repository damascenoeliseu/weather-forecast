import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import ForecastDetails from '../../components/ForecastDetails';
import Forecast from '../../components/Forecast';

import api, { key } from '../../services/api';

import { Container, List } from './styles';

const myList = [
   {
      "date": "04-20",
      "weekday": "Tue",
      "max": 20,
      "min": 15,
      "description": "Day partly cloudy",
      "condition": "cloudly_day"
   },
   {
      "date": "04-21",
      "weekday": "Wed",
      "max": 20,
      "min": 15,
      "description": "Showers",
      "condition": "rain"
   },
   {
      "date": "04-22",
      "weekday": "Thu",
      "max": 20,
      "min": 14,
      "description": "Day mostly cloudy",
      "condition": "cloud"
   },
   {
      "date": "04-23",
      "weekday": "Fri",
      "max": 21,
      "min": 13,
      "description": "Day mostly cloudy",
      "condition": "cloud"
   },
   {
      "date": "04-24",
      "weekday": "Sat",
      "max": 24,
      "min": 13,
      "description": "Day partly cloudy",
      "condition": "cloudly_day"
   },
   {
      "date": "04-25",
      "weekday": "Sun",
      "max": 23,
      "min": 14,
      "description": "Scattered thunderstorms",
      "condition": "storm"
   },
   {
      "date": "04-26",
      "weekday": "Mon",
      "max": 22,
      "min": 15,
      "description": "Showers",
      "condition": "rain"
   },
   {
      "date": "04-27",
      "weekday": "Tue",
      "max": 18,
      "min": 12,
      "description": "Day partly cloudy",
      "condition": "cloudly_day"
   },
   {
      "date": "04-28",
      "weekday": "Wed",
      "max": 17,
      "min": 12,
      "description": "Day partly cloudy",
      "condition": "cloudly_day"
   },
   {
      "date": "04-29",
      "weekday": "Thu",
      "max": 18,
      "min": 12,
      "description": "Day mostly cloudy",
      "condition": "cloud"
   }
];

export default function Home() {
   const [errorMessage, setErrorMessage] = useState(null);
   const [loading, setLoading] = useState(true);
   const [weather, setWeather] = useState([]);
   const [icon, setIcon] = useState({ name: 'cloud', color: '#fff' });
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
         //weather?key=435ca895&lat=-23.682&lon=-46.875
         const { data } = await api.get(`weather?key=${key}&lat=${coords.latitude}&lon=${coords.longitude}`);
         setWeather(data);

         if (data.results.currently === 'noite') {
            setBackground(['#0c3741', '#0f2f61']);
         }

         switch (data.results.condition_slug) {
            case 'clear_day':
               setIcon({ name: 'partly-sunny', color: '#ffb300' });
               break;
            case 'rain':
               setIcon({ name: 'rainy', color: '#fff' });
               break;
            case 'storm':
               setIcon({ name: 'rainy', color: '#fff' });
               break;
         }

         setLoading(false);

      })();
   }, []);

   return (
      <Container>
         <Menu />
         <Header />
         <ForecastDetails />
         <List
            horizontal={true}
            data={myList}
            keyExtractor={item => item.date}
            renderItem={({ item }) => <Forecast data={item} />}
         />
      </Container>
   );
}