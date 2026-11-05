import { StyleSheet, Text, View ,Image} from "react-native"


export default function App(){
    return (
        <View style={mystyle.container}>
          <Text style={mystyle.title}>Pooritat</Text>
          <Image 
          source={require("@/assets/images/images.jpeg")}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            borderWidth: 10,
            borderColor: "purple"
          }}
          />
        <Image
           source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjbClXJPNDixU0oZr8QK51jkruUIGmCkNDUubF883kA&s=10"}}
           style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            borderWidth: 10,
            borderColor: "purple"
          }}
        />
        <View style={{flexDirection: "row"}}>
            <Text>cat🐈</Text>
            <Text>dog🐕</Text>
            <Text>Duck🦆</Text>
            <Text>Bird🐦</Text>
            <Text>fish🐟</Text>
        </View>
    </View>
    )
        
    
} 

const mystyle = StyleSheet.create({
    container:{
      backgroundColor: "green",
      flex: 1,
      paddingTop: 100,
      alignItems: "center"
    },
    title:{
        color: "blue",
        fontSize:26,
        fontWeight:700,
        textAlign: "center",
    }
})