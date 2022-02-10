import {
     StyleSheet,
     Text,
      View,
      Dimensions,
       FlatList ,
       Image,
       TouchableOpacity,
       Animated
    } from 'react-native';
import React,{useEffect ,useState,useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Card = () => {
const {width , height } = Dimensions.get('window')


const [songIndex, setSongIndex] = useState(0)
const scrollX = useRef( new Animated.Value(0)).current;
const songSlider = useRef(null)
useEffect(() => {
  scrollX.addListener(({value})=>{
      console.log('scroll x ', scrollX)
      console.log('Devuce Width ', width)
      const index = Math.round(value/width)
      setSongIndex(index)
      console.log('index ', index)


  });
  return()=>{
    //   scrollX.removeAllListeners()
  }
}, [])

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
<Animated.View style={{width:width,alignItems:'center',justifyContent:'center'}}>

<View style={styles.artWorkRapper}>

<Image style={{width:300,height:300}} source={item.img} style={styles.artWorkImg} />
</View>
</Animated.View>
    )
}

const skipToforward = () =>{
    songSlider.current.scrollToOffset({
        offset:(songIndex + 1) * width
    })
}
const skipToPrevious = () =>{
    songSlider.current.scrollToOffset({
        offset:(songIndex - 1) * width
    })
}
  return (
    
        <View style={styles.container}>

      <View style={styles.firstChildContainer}>
<Animated.FlatList
ref={songSlider}
data={actions}
renderItem={CardItem}
keyExtractor={(item) => item.id}
horizontal
pagingEnabled
showsHorizontalScrollIndicator={false}
scrollEventThrottle={16}
onScroll={Animated.event([
    {
        nativeEvent:{
            contentOffset:{x:scrollX}
        }
    }
],
{useNativeDriver:true}
)}
/>
      </View>
<View>
<Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:'#FFF'}}>{actions[songIndex].title}</Text>
<Text style={{textAlign:'center',color:'#FFF',marginVertical:10}}>{actions[songIndex].artist}</Text>

</View>
      <Slider
  style={{width: '80%',alignSelf:'center', height: 40}}
  minimumValue={0}
  maximumValue={100}
  thumbTintColor={'#FFD369'}
  minimumTrackTintColor="#FFD369"
  maximumTrackTintColor="#000000"
  onSlidingComplete={()=>{}}
/>
<View style={styles.controller}>
<TouchableOpacity onPress={skipToPrevious}>
<Ionicons size={30} color={'#FFD369'} name={'play-skip-back'} />

</TouchableOpacity>
<TouchableOpacity>
<Ionicons size={60} color={'#FFD369'} name={'pause-circle'} />

</TouchableOpacity>
<TouchableOpacity onPress={skipToforward}>
<Ionicons size={30} color={'#FFD369'} name={'play-skip-forward'} />

</TouchableOpacity>
</View>
        </View>
    
  );
};

export default Card;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray'
    },
    firstChildContainer:{
        // flex:1,
        marginTop:50,
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
    },
    controller:{
        paddingHorizontal:100,
        marginVertical:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
});
