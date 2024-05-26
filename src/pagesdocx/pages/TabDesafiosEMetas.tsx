import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';

export default function TabDesafiosEMetas() {
    const [weekGoal, setWeekGoal] = useState('00')
    const [monthGoal, setMonthGoal] = useState('00')
    const [desafioRascunho, setDesafioRascunho] = useState('');

    
    const numberToBRL = (num) => {
        return num.toFixed(2).replace('.', ',')
    }
    return (
        <View style={styles.screen}>
            <View style={styles.title_container}>
                <Text style={styles.title}>Desafios E Metas</Text>
            </View>
            <View style={styles.component}>
                <Text style={styles.component_title}>Meta da Semana</Text>
                <View style={styles.component_view}>
                    <View style={styles.component_view_wrapper}>
                        <Text style={styles.meta}>Faça sua própria meta:</Text>
                        <TextInput value={`R$ ${weekGoal},00`} style={styles.component_value} onChangeText={(text) => setWeekGoal(text)}/>
                    </View>
                    <View style={styles.image_container}><Image style={styles.image} source={require('../../../assets/alinhamento-do-grafico1.png')}/></View>
                </View>
            </View>
            <View style={styles.component}>
                <Text style={styles.component_title}>Meta do Mes</Text>
                <View style={styles.component_view}>
                    <View style={styles.component_view_wrapper}>
                        <Text style={styles.meta}>Faça sua própria meta:</Text>
                        <TextInput value={`R$ ${monthGoal},00`} style={styles.component_value} onChangeText={(text) => setMonthGoal(text)}/>
                    </View>
                    <View style={styles.image_container}><Image style={styles.image} source={require('../../../assets/alinhamento-do-grafico1.png')}/></View>
                </View>
            </View>
            <View style={[styles.title_container, { alignItems: 'flex-start' }]}>
                <Text style={styles.title}>Desafios</Text>
            </View>
            <View style={styles.define_goals_view}>
                <Text style={styles.meta}>Para o bem da sua carteira, é importante realizar desafios e estabelecer metas. Adicione seu desafio: </Text>
                <ScrollView style={styles.scrollable_view}>
                    <TextInput style={styles.scrollable_view_content}  value={desafioRascunho} onChangeText={(text) => setDesafioRascunho(text)}/>
                </ScrollView>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', maxHeight: 30 }}>
                <TouchableOpacity style={{ backgroundColor: 'red', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 50 }} onPress={() => { 
                    setDesafioRascunho('')
                    }}><Text style={styles.component_button_text}>Apagar Desafio</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    meta: {
        color: '#fafafa',
        fontSize: 14,
        fontWeight: 'bold',
    },
    screen: {
        flex: 1,
        backgroundColor: '#444242',
        gap: 10,
        
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    title_container: {
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fafafa'
    },
    title: {
        color: '#fafafa',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 22,
        flexWrap: 'nowrap'
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
    component_value: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fafafa'
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
    define_goals_view: {
        flex: 1,
        padding: 20,
        gap: 10
    },
    scrollable_view: {
        backgroundColor: '#292929',
        flex: 1,
        borderRadius: 12,
        borderRightWidth: 2,
        borderRightColor: '#cc2229'
    },
    scrollable_view_content: {
        color: '#fafafa',
        marginVertical: 10,
        marginHorizontal: 15
    }
})

// bg: #444242
// scroll: #cc2229
// scroll-content-bg: #292929