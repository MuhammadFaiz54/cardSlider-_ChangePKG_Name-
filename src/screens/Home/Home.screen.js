import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from '../../components/Card';

const Home = () => {
  return (
    <View style={styles.container}>
   
    <Card />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
});
