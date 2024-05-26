import { View, Text, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
export default function HomePage({ navigate }){



    return(
    <View style={styles.container}>
        
            <View style={styles.containerImage}>
                <Image style={styles.imagem} source={require('../assets/logo.png')} alt="logotipo"/>
                <Text style={styles.textLogo}>SAFE WALLET</Text>
            </View>
            
            <Text style={styles.text}>Bem-vindo ao seu novo começo financeiro! Vamos  juntos aprender a gerir melhor seu dinheiro para um futuro próspero.</Text>
        
            <Pressable style={styles.btn} onPress={()=> navigate('Educacaobasica')}>
                <Text style={styles.text}>Comece Agora!</Text>
            </Pressable>
        
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#444242',
        gap: 20,
    },
    containerImage:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem:{
        width:300,
        height: 300
    },
    textLogo:{
        marginTop: -60,
        fontFamily: 'Roboto',
        fontSize: 22,
        color: '#F3F0F0'
    },
    text:{
        maxWidth: 320,
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#F3F0F0',
        textAlign: 'center'
    },
    btn:{
        backgroundColor: '#CC2229',
        paddingVertical: 12,
        paddingHorizontal:14,
        marginTop: 70

    }
})