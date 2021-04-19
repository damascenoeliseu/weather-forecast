import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
   position: absolute;
   z-index: 9;
   width: 70px;
   height: 70px;
   background-color: #fff;
   align-items: center;
   justify-content: center;
   left: 15px;
   top: 40px;
   border-top-right-radius: 30px;
   border-bottom-left-radius: 30px;
   border-bottom-right-radius: 30px;
   box-shadow: 1px 3px 1px rgba(0,0,0,0.2); //offset width, offset height, blur, spread color (opacity)
`;