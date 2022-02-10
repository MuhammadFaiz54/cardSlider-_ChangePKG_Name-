import { StyleSheet, Text, View,Dimensions, FlatList ,Image} from 'react-native';
import React,{useEffect ,useState,useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Card = () => {
const {width , height } = Dimensions.get('window')
 const actions = [
     {
         title :'kyoun',
         id:1,
         artist:'Arjit Singh',
         img:require('../../assets/images/demo1.jpg')
     },
     {
        title :'Hello',
        id:2,
        artist:'Singh',
        img:require('../../assets/images/demo2.jpg')
    },
    {
        title :'World',
        id:3,
        artist:'Atif',
        img:require('../../assets/images/demo3.jpg')
    },
    {
        title :'Hope',
        id:4,
        artist:'Aslam',
        img:require('../../assets/images/demo4.jpg')
    },
    {
        title :'nock',
        id:5,
        artist:'Buttler',
        img:require('../../assets/images/demo5.jpg')
    },
    {
        title :'Dingdong',
        id:6,
        artist:'Arjit Singh',
        img:require('../../assets/images/demo6.jpg')
    },
 ]

const CardItem = ({item , index}) =>{
    return(
<View style={{width:width,alignItems:'center',justifyContent:'center'}}>

<View style={styles.artWorkRapper}>

<Image style={{width:300,height:300}} source={item.img} style={styles.artWorkImg} />
</View>
</View>
    )
}

  return (
    
        <View style={styles.container}>

      <View style={styles.firstChildContainer}>
<FlatList 
data={actions}
renderItem={CardItem}
keyExtractor={(item) => item.id}
horizontal
pagingEnabled
showsHorizontalScrollIndicator={false}
scrollEventThrottle={16}
/>
      </View>
        </View>
    
  );
};

export default Card;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    firstChildContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    artWorkRapper:{
        width:300,
        height:340,
        marginBottom:25
    },
    artWorkImg:{
        width:'100%',
        height:'100%',
        borderRadius:15
    }
});
