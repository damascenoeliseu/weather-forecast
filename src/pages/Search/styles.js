import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
   flex: 1;
   align-items: center;
   padding-top:10%;
   background-color: #e8f0ff;
`;

export const BackButton = styled.TouchableOpacity`
   flex-direction: row;
   margin-left: 15px;
   align-self: flex-start;
   align-items: center;
   margin-bottom: 10px;
`;

export const SearchIcon = styled.TouchableOpacity`
   width: 15%;
   background-color: #1ed6ff;
   align-items: center;
   justify-content: center;
   height: 50px;
   border-top-right-radius: 8px;
   border-bottom-right-radius: 8px;
`;

export const SearchBox = styled.View`
   align-items: center;
   flex-direction: row;
   background-color: #ddd;
   width: 90%;
   height: 50px;
   border-radius: 8px;
   margin-bottom: 15px;
`;

export const Input = styled.TextInput`
   width: 85%;
   height: 50px;
   background-color: #fff;
   border-top-left-radius: 8px;
   border-bottom-left-radius: 8px;
   padding: 7px;
`;