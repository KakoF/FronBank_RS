import React from 'react'


import QRCode from 'react-native-qrcode'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({ translateY }){
    return(
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 10],
                    extrapolate: 'clamp'
                  }),
            }],
            opacity: translateY.interpolate({
              inputRange: [0, 150],
              outputRange: [0, 1],
              extrapolate: 'clamp'
            })
          }}>
            <Code>
                <QRCode value="https://google.com" size={80} bgColor="#006400" fgColor="#fff"/>
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#006400" />
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#006400" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#006400" />
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#006400" />
                    <NavText>Configurações do APP</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>Sair</SignOutButtonText>
            </SignOutButton>
        </Container>
    );

}