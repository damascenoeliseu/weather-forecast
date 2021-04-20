import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


export const Container = styled(LinearGradient)`
   width: 95%;
   height: 55%;
   align-items: center;
   justify-content: center;
   border-radius: 8px;
`;

export const Date = styled.Text`
   color: #fff;
   font-size: 17px;
`;

export const City = styled.Text`
   color: #fff;
   font-size: 20px;
   font-weight: bold;
`;

export const Icon = styled(Ionicons)``;

export const Temperature = styled.Text`
   color: #fff;
   font-size: 80px;
   font-weight: bold;
`;