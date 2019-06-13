import React from 'react';
import { Container, Top, Logo, Title } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/credisan_logo.png';

export default function Header(){
    return (
        <Container>
            <Top>
                <Logo source={logo}/>
                <Title>Marcos</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#006400" />
        </Container>
    )
}