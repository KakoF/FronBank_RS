import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';


export default function Main(){
  let offset = 0;
  const translateY = new Animated.Value(0);
  const AnimatedEvent = Animated.event(
    [
      {
        nativeEvent: {
            translationY: translateY
        }
      }
    ],
    {useNativeDriver: true},
  )
  function onHandlerStateChange(event){
    if(event.nativeEvent.oldState === State.ACTIVE){
      let opened = false
      const {translationY} = event.nativeEvent;
      offset += translationY;

      if(translationY >= 100){
        opened = true
       
      }else{
        translateY.setOffset(0);
        translateY.setValue(offset);
        offset = 0
      }
      Animated.timing(translateY, {
        toValue: opened? 350: 0,
        duration: 200,
        useNativeDriver: true
      }).start(()=>{
        offset = opened ? 350 : 0;
        translateY.setOffset(offset)
        translateY.setValue(0)
      });
    
    }
  }

  return(
    <Container>
      <Header/>
      <Content>
        <Menu translateY={translateY}/>
        <PanGestureHandler
        onGestureEvent={AnimatedEvent}
        onHandlerStateChange={onHandlerStateChange}>
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange:[-350, 0, 350],
                outputRange: [-50, 0, 350],
                extrapolate: 'clamp'
              }),
            }],
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#afaa00"/>
              <Icon name="visibility-off" size={28} color="#afaa00"/>
            </CardHeader>
            <CardContent>
              <Title>Saldo Dinsponível</Title>
              <Description>R$ 7.455,22</Description>
            </CardContent>
            <CardFooter>
              <Annotation>Transferência de R$ 20,00 recebida de Kako Ferrare hoje às 06:00h</Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY}/> 
    </Container> 
  )
}