import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function TabPesquisaEComparacaoDePrecos() {
    return (
        <View style={styles.screen}>
            <View style={styles.title_container}>
                <Text style={styles.title}>Dicas Para Economizar</Text>
            </View>
            <View style={styles.image_container}>
                <Image style={styles.image} source={require('../../../assets/dolar-da-lampada.png')}/>
            </View>
            <View style={styles.contents_wrapper}>
                <View style={styles.content}>
                    <ScrollView style={styles.scrollable_view}>
                        <View>
                            <Text style={styles.content_title}>1. Orcamento</Text>
                            <View>
                                <Text style={styles.scrollable_view_content}>Crie um orçamento: Anote todas as suas receitas e despesas mensais. Isso ajuda a ter uma visão clara de para onde seu dinheiro está indo.</Text>
                                <Text style={styles.scrollable_view_content}>Acompanhe suas despesas: Use aplicativos ou planilhas para monitorar seus gastos diários.</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.content_title}>2. Gastos Fixos e Variaveis</Text>
                            <View>
                                <Text style={styles.scrollable_view_content}>Reduza os Gastos Fixos
Negocie Contratos de Serviços: Negocie contratos de serviços como internet, telefone e TV a cabo. Avalie a possibilidade de mudar para planos mais baratos ou pacotes combinados que ofereçam descontos.
Reveja Assinaturas e Mensalidades: Cancele assinaturas e serviços não essenciais ou subutilizados, como academias, streaming de música e revistas. Opte por alternativas gratuitas ou mais econômicas.
Planejamento e Controle de Compras
Faça uma Lista de Compras: Antes de ir ao supermercado, faça uma lista de compras e evite comprar itens não planejados. Isso ajuda a controlar os gastos e evitar compras por impulso.
Cozinhe em Casa: Reduza as refeições fora de casa e opte por cozinhar em casa. Leve marmitas para o trabalho e prepare lanches em vez de comprá-los prontos.np</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#444242',
        gap: 10,
        
        paddingBottom: 30
    },
    title_container: {
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fafafa',
    },
    title: {
        color: '#fafafa',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 22,
        flexWrap: 'nowrap'
    },
    contents_wrapper: {
        flex: 1,
        gap: 20,
        padding: 10
    },
    content: {
        flex: 1,
        paddingHorizontal: 50,
        gap: 5
    },
    content_title: {
        color: '#fafafa',
        fontWeight: 'bold',
        fontSize: 18
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
        marginHorizontal: 20,
        marginBottom: 20
        
    },
    image_container: {
        flex: 1,
        maxHeight: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        aspectRatio: 1,
        height:100,
        objectFit:'contain'
    }
})

// bg: #444242
// 
// scroll-content-bg: #292929