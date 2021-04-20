import React from 'react';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import ForecastDetails from '../../components/ForecastDetails';
import Forecast from '../../components/Forecast';

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