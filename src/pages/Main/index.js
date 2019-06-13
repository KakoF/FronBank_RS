import React from 'react';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main(){
  return(
    <Container>
      <Header/>
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#FF7F00"/>
            <Icon name="visibility-off" size={28} color="#FF7F00"/>
          </CardHeader>
          <CardContent>
            <Title>Saldo Dinsponível</Title>
            <Description>R$ 7.455,22</Description>
          </CardContent>
          <CardFooter>
            <Annotation>Transferência de R$ 20,00 recebida de Kako Ferrare hoje às 06:00h</Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs/> 
    </Container> 
  )
}