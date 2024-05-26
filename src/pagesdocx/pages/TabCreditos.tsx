import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TabCreditos() {
    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.credits_container}>
                        <View style={styles.credits_title_container}>
                            <Text style={styles.credits_title}>Desenvolvimento de Softwares</Text>
                        </View>
                        <View style={styles.credits_content}>
                            <Text style={styles.credits_content_text_bold}>Professor Orientador:</Text>
                            <Text style={styles.credits_content_text}>Prof. Dr. Elvio Gilberto da Silva</Text>
                        </View>
                    </View>
                    <View style={styles.credits_container}>
                        <View style={styles.credits_title_container}>
                            <Text style={styles.credits_title}>Autores</Text>
                        </View>
                        <View style={styles.credits_content}>
                            <Text style={styles.credits_content_text}>Ana Julia Coelho Savio</Text>
                            <Text style={styles.credits_content_text}>Daniel Augusto Ribeiro Martins</Text>
                            <Text style={styles.credits_content_text}>Felippe Benedito Moreira</Text>
                            <Text style={styles.credits_content_text}>Matheus Rodrigues Peres</Text>
                            <Text style={styles.credits_content_text}>Rafael Camilli Vieira</Text>
                            <Text style={styles.credits_content_text}>Viktor Bonazza Charlanti</Text>
                        </View>
                    </View>
                    <View style={styles.image_container}>
                        <View>
                            <Text style={styles.image_title}>Desenvolvimento</Text>
                        </View>
                        <View style={styles.image_wrapper}>
                            <View style={styles.image}></View>
                        </View>
                    </View>
                    <View style={styles.image_container}>
                        <View>
                            <Text style={styles.image_title}>Apoio</Text>
                        </View>
                        <View style={styles.image_wrapper}>
                            <View style={styles.image}></View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#444242',
        gap: 10,
        
    },
    container: {
        flex: 1,
        gap: 40,
        padding: 20
    },
    credits_container: {
        width: '100%',
        height: 'auto',
        borderRadius: 12,
        overflow: 'hidden'
    },
    credits_title_container: {
        width: '100%',
        height: 40,
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    credits_title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    credits_content: {
        backgroundColor: '#292929',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        padding: 15
    },
    credits_content_text: {
        color: 'white',
        fontSize: 15
    },
    credits_content_text_bold: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    image_container: {
        width: '100%',
        height: 'auto',
        gap: 15
    },
    image_title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    image_wrapper: {
        width: '100%',
        height: 80
    },
    image: {
        flex: 1,
        backgroundColor: 'white'
    }
})

// bg: #444242
// scroll: #cc2229
// scroll-content-bg: #292929