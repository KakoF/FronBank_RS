import {StyleSheet, Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 10px;
`;


export const Code = styled.View`
    background: #00467c;
    padding: 5px;
    padding-bottom: 10px;
    align-self: center;

`;

export const Nav = styled.View`
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(0, 100, 0, 1);

`;

export const NavItem = styled.View`
flex-direction: row;
align-items: center;
padding: 10px 0;
border-bottom-width: ${StyleSheet.hairlineWidth}px;
border-bottom-color: rgba(0, 100, 0, 1);
`;

export const NavText = styled.Text`
font-size: 12px;
color: #00467c;
margin-left: 20px;
`;


export const SignOutButton = styled.TouchableOpacity`
border-width: ${StyleSheet.hairlineWidth}px;
border-color: rgba(0, 100, 0, 1);
border-radius: 4px;
justify-content: center;
align-items: center;
padding: 12px;
margin-top: 12px;
`;


export const SignOutButtonText = styled.Text`
font-weight: bold;
font-size: 13px;
color: #00467c;
`;