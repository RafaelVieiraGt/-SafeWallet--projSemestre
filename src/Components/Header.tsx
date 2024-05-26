import { View, Text,StyleSheet, Image } from "react-native";

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.text}>SafeWallet</Text>
            <Image source={require('../../assets/atencao2.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:70,
        width: '100%',
        backgroundColor:'red',
        padding:20,
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    text:{
        color: '#fff',
        fontSize:20,
        fontWeight:'bold'
    }
})