import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Card } from '@rneui/base';
import database from '@react-native-firebase/database';

export default function App() {

  //Armazenar notícias (conteudo que vamos renderizar)
  const [listaNoticias, setListaNoticias] = React.useState([])

  //Funciona como um construtor, useEffect é executado sempre que o componente é chamado
  React.useEffect(() => {
    database()
      .ref('/noticias')
      .on('value', snapshot => {
        const noticias = Object.values(snapshot.val());
        setListaNoticias(noticias)
        console.log('Data: ', noticias);
      });
  }, [])

  return (
    <View style={{padding: 16}}>
      <Text style={{fontWeight: 'bold', fontSize: 22}}>Feed de notícias</Text>

      <View style={{marginTop: 16}}>
        {
          listaNoticias.map(data =>
            <Card containerStyle={{marginTop: 14}}>
              <Card.Title style={{fontSize: 18}}>{data.categoria}</Card.Title>
              <Card.Divider />
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                {data.titulo}
              </Text>
              <Text style={{fontSize: 14}}>
                {data.conteudo}
              </Text>
            </Card>
          )
        }
      </View>
    </View>
  );
}