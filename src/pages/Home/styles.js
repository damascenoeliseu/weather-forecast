import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: #e8f0ff;
   padding: 5% 0 5% 0;
`;

export const List = styled.FlatList`
   margin-top: 10px;
   margin-left: 10px;
`;

export const LoadingData = styled.Text`
   font-size: 17px;
   font-style: italic;
`;