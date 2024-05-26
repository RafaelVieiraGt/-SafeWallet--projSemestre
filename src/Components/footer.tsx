
import { Image, Pressable, StyleSheet, View } from "react-native";
import Header from "./Header";

export default function Footer({navigate}) {
    return (
        <View style={styles.containerFooter}>
           
           <View style={styles.navigationBtn}  >
                <Pressable onPress={() => navigate('dicastodasidades')}>
                    <Image style={styles.imagem} source={require('../../assets/livro1.png')} />
                </Pressable>
           </View>

           <View style={styles.navigationBtn}  >
                <Pressable onPress={() => navigate('desafiosemetas')}>
                    <Image style={styles.imagem} source={require('../../assets/moedas2.png')} />
                </Pressable>
           </View>

           <View style={styles.navigationBtn}  >
                <Pressable onPress={() => navigate('pesquisacomparacao')}>
                    <Image style={styles.imagem} source={require('../../assets/pesquisa-de-lupa2.png')} />
                </Pressable>
           </View>
           <View style={styles.navigationBtn}  >
                <Pressable onPress={() => navigate('planejamentoorcamento')}>
                    <Image style={styles.imagem} source={require('../../assets/dicionario2.png')} />
                </Pressable>
           </View>
           <View style={styles.navigationBtn}  >
                <Pressable onPress={() => navigate('comunidadefinanceira')}>
                    <Image style={styles.imagem} source={require('../../assets/verificacao-da-lista-da-area-de-transferencia2.png')} />
                </Pressable>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFooter:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CC2229',
        gap: 25,
        paddingVertical: 10,
    },
    navigationBtn: {
        width: '15%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem:{
        
        width: 40,
        height: 40
    }
})