import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, FlatList, Text, View, Image } from 'react-native';
import React from 'react';
import p3Image from './assets/Persons/p3.png';
import p2Image from './assets/Persons/p2.png';
import p1Image from './assets/Persons/p1.png';

const App=()=>{
const Person = [
  {
    id: '1',
    name: 'Ayesha',
    image: require('./assets/Persons/p1.png'),
  },
  {
    id: '2',
    name: 'Umer',
    image: require('./assets/Persons/p2.png'),
  },
  {
    id: '3',
    name: 'Khurram',
    image: require('./assets/Persons/p3.png'),
  },
  {
    id: '4',
    name: 'Umaima',
    image: require('./assets/Persons/p1.png'),
  },
  {
    id: '5',
    name: 'Khalid',
    image: require('./assets/Persons/p2.png'),
  },
];
 //for extract Person
const onePerson = ({ item }) => (
  <View style={styles.item}>
    <View style={styles.assetsContainer}>
    <Image source={item.image}style={styles.assets} />
    </View>
    <Text style={styles.name}>{item.name}</Text>
    
  </View>
);
  // for Heading
headerComponent=()=>{
  return <Text style={styles.listHeadLine}>Contact</Text>
}

itemSperator=()=>{
  return <View style={styles.seperator} />
}

  return (
    <SafeAreaView>
    <FlatList
    ListHeaderComponentStyle={styles.ListHeader}
      data={Person}
      ListHeaderComponent={headerComponent}
      ListEmptyComponent={<Text>Flatlist</Text>}
      renderItem={onePerson}
      ItemSeperatorComponent={itemSperator}
      keyExtractor={Person => Person.id}
    
    />
    </SafeAreaView>
  );
  }

const styles = StyleSheet.create({
 
 ListHeader:{
  height:50,
  alignItems:'center',
  justifyContent:'center',
 },
  seperator:{
    height:1,
    width:'100%',
   backgroundColor:'#FFF',
  },
  listHeadLine:{
    color:'#333',
    fontSize:30,
    fontFamily:'bold',
  }
  ,
  assetsContainer:{
    borderRadius:100,
    height:80,
    width:80,
    alignItems: 'center',
    justifyContent:'center'
  }
  ,
  assets:{
    height:50,
    width:50,
  },
  item:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:13,
  },
  name:{
    fontSize:15,
    marginLeft:18,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
 
});

export default App;
