import { View, Text } from 'react-native'
import React from 'react'
import { Card } from '@rneui/base';

export default function App() {
  return (
    <View style={{padding: 16}}>
      <Text style={{fontWeight: 'bold', fontSize: 22}}>Feed de notícias</Text>

      <View style={{marginTop: 16}}>
        <Card containerStyle={{marginTop: 14}}>
          <Card.Title style={{fontSize: 18}}>POLÍTICA</Card.Title>
          <Card.Divider />
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            Guerra na Ucrânia
          </Text>
          <Text style={{fontSize: 14}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            egestas felis vitae sapien viverra, nec porta risus porttitor. Nunc
            lacinia sed purus id convallis.
          </Text>
        </Card>
      </View>
    </View>
  );
}