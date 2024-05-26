import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function TabPlanejamentoEOrcamento() {
    const [incoming, setIncoming] = useState(100.00)
    const [outgoing, setOutgoing] = useState(25.00)
    const numberToBRL = (num) => {
        return num.toFixed(2).replace('.', ',')
    }
    return (
        <View style={styles.screen}>
            <View style={styles.component}>
                <Text style={styles.component_title}>Receitas</Text>
                <View style={styles.component_view}>
                    <View style={styles.component_view_wrapper}>
                        <Text style={styles.component_value_green}>R$ {numberToBRL(incoming)}</Text>
                        <TouchableOpacity style={styles.component_button} onPress={() => { setIncoming(incoming + 1.5) }}><Text style={styles.component_button_text}>Adicionar Receita</Text></TouchableOpacity>
                    </View>
                    <View style={styles.image_container}><Image style={styles.image} source={require('../../../assets/alinhamento-do-grafico1.png')}/></View>
                </View>
            </View>
            <View style={styles.component}>
                <Text style={styles.component_title}>Despesas</Text>
                <View style={styles.component_view}>
                    <View style={styles.component_view_wrapper}>
                        <Text style={styles.component_value_red}>R$ {numberToBRL(outgoing)}</Text>
                        <TouchableOpacity style={styles.component_button} onPress={() => { setOutgoing(outgoing + 1.5) }}><Text style={styles.component_button_text}>Adicionar Despesa</Text></TouchableOpacity>
                    </View>
                    <View style={styles.image_container}><Image style={styles.image} source={require('../../../assets/seta-para-baixo1.png')}/></View>
                </View>
            </View>
            <View style={styles.title_container}>
                <Text style={styles.title}>Importância do controle de despesas pessoais</Text>
            </View>
            <View style={styles.define_goals_view}>
                <ScrollView style={styles.scrollable_view}>
                    <Text style={styles.scrollable_view_content}>Controlar as despesas fixas e variáveis é essencial para manter umarvida financeira saudávelr e atingir seus objetivos. 

Afinal, você precisa gastar menos do que ganhar para conseguir poupar, investir e alcançar as metas que dependem do dinheiro, como comprar um imóvel, viajar ou fazer um curso. 

No entanto, a falta de educação financeira tem como consequência o descontrole em relação aos próprios gastos e problemas na gestão do dinheiro. </Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#444242',
        gap: 10,
        
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    component: {
        flex: 1,
        maxHeight: 160,
        flexDirection: 'column',
        gap: 5
    },
    component_title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fafafa'
    },
    component_view: {
        flex: 1,
        backgroundColor: '#292929',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        gap: 20
    },
    component_view_wrapper: {
        flex: 1,
        justifyContent: 'space-around'
    },
    image_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: '90%',
        aspectRatio: 1,
        objectFit: 'contain'
    },
    component_value_green: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green'
    },
    component_value_red: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    component_button: {
        width: '100%',
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 50,
    },
    component_button_text: {
        textAlign: 'center',
        color: '#fafafa'
    },
    title_container: {
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fafafa',
        marginTop: 20
    },
    title: {
        color: '#fafafa',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 22,
        flexWrap: 'nowrap'
    },
    define_goals_view: {
        flex: 1,
        padding: 20
    },
    scrollable_view: {
        backgroundColor: '#292929',
        flex: 1,
        borderRadius: 12,
        padding: 10,
        borderRightWidth: 2,
        borderRightColor: '#cc2229'
    },
    scrollable_view_content: {
        color: '#fafafa',
        marginVertical: 5,
        marginHorizontal: 10,
        marginBottom: 20
    }
})

// bg: #444242
// scroll: #cc2229
// scroll-content-bg: #292929