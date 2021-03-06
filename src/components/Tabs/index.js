import React from 'react';
import { Container, TabsContainer, TabItem, TabText } from './styles';
import { TouchableOpacity, NativeModules } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Tabs({ translateY }){
    return (
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 350],
                    outputRange: [0, 30],
                    extrapolate: 'clamp'
                  }),
            }],
            opacity: translateY.interpolate({
              inputRange: [0, 150],
              outputRange: [1, 0],
              extrapolate: 'clamp'
            })
          }}>
            <TabsContainer>
            <TouchableOpacity onPress={() => ({})}>
                <TabItem>
                    <Icon name="person-add" size={24} color="#fff"/>
                    <TabText>
                        Indicadar Amigos
                    </TabText>
                </TabItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ({})}>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#fff"/>
                    <TabText>
                        Cobrar
                    </TabText>
                </TabItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ({})}>
                <TabItem>
                    <Icon name="arrow-downward" size={24} color="#fff"/>
                    <TabText>
                        Depositar
                    </TabText>
                </TabItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ({})}>
                <TabItem>
                    <Icon name="arrow-upward" size={24} color="#fff"/>
                    <TabText>
                        Transferir
                    </TabText>
                </TabItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ({})}>
                <TabItem>
                    <Icon name="lock" size={24} color="#fff"/>
                    <TabText>
                        Bloquear Cartão
                    </TabText>
                </TabItem>
                </TouchableOpacity>
            </TabsContainer>
        </Container>
    )
}