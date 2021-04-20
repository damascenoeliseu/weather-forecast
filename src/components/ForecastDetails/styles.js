import styled from 'styled-components/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
   margin-top: 15px;
   padding: 10px;
   background-color: #fff;
   flex-direction: row;
   width: 95%;
   justify-content: space-around;
   border-radius: 8px;
`;

export const Icon = styled(Feather)``;

export const MaterialIcon = styled(MaterialCommunityIcons)``;

export const DetailItem = styled.View`
   align-items: center;
   justify-content: center;
`;