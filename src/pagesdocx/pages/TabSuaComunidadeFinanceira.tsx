import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function TabSuaComunidadeFinanceira() {
    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={{ gap: 20, flex: 1 }}>
                    <View style={styles.title_container}>
                        <Text style={styles.title}>Sua Comunidade Financeira</Text>
                    </View>
                    <View style={styles.image_container}>
                        <Image style={styles.image} source={require('../../../assets/dicionario1.png')}/>
                    </View>
                    <View style={styles.contents_wrapper}>
                        <View style={styles.content}>
                            <ScrollView style={styles.scrollable_view}>
                                <View>
                                    <Text style={styles.content_title}>1. Despesas variáveis</Text>
                                    <View>
                                        <Text style={styles.content_title2}>O que são despesas variáveis?</Text>
                                        <Text style={styles.scrollable_view_content}>s despesas variáveis oscilam e mudam conforme a frequência e intensidade do consumo. Em resumo, quando o custo da despesa depende do nosso consumo, ela é variável. Por serem mais difíceis de prever, é preciso ter atenção redobrada com esses gastos. Porém, vale ressaltar que, com um pouco de organização, é possível fazer uma média do valor a ser pago mensalmente com base nos gastos dos meses anteriores. Em outras palavras, você pode ter uma previsão do valor dessas despesas.</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.content_title}>2. Gastos Fixos e Variaveis</Text>
                                    <View>
                                        <Text style={styles.content_title2}> As despesas variaveis podem ser: </Text>
                                       
                                            <Text style={styles.scrollable_view_content}>Alimentação (supermercado, feira, açougue, quitanda, padaria, etc.);</Text>
                                            <Text style={styles.scrollable_view_content}>Transporte público ou combustível do carro; </Text>
                                            <Text style={styles.scrollable_view_content}>Estacionamento; </Text>
                                            <Text style={styles.scrollable_view_content}>Farmácia; </Text>
                                            <Text style={styles.scrollable_view_content}>Cuidados pessoais (produtos de higiene e ligados ao bem-estar); </Text>
                                            <Text style={styles.scrollable_view_content}>Utilidades domésticas; </Text>
                                            <Text style={styles.scrollable_view_content}>Serviços de beleza; </Text>
                                            <Text style={styles.scrollable_view_content}>Vestuário em geral; </Text>
                                            <Text style={styles.scrollable_view_content}>Ingressos de cinema, teatro e museu; </Text>
                                            <Text style={styles.scrollable_view_content}>Passeios e viagens; </Text>
                                            <Text style={styles.scrollable_view_content}>Serviços pay per view (PPV); </Text>
                                            <Text style={styles.scrollable_view_content}>Objetos de decoração; </Text>
                                            <Text style={styles.scrollable_view_content}>Presentes; </Text>
                                       
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.image_container}>
                        <Image style={styles.image} source={require('../../../assets/link-quebrado1.png')}/>
                    </View>
                    <View style={styles.contents_wrapper}>
                        <View style={styles.content}>
                            <ScrollView style={styles.scrollable_view}>
                                <View>
                                    <Text style={styles.content_title}>1. Despesas Fixas</Text>
                                    <View>
                                        <Text style={styles.content_title2}>O que são despesas fixas?</Text>
                                        <Text style={styles.scrollable_view_content}>Basicamente, despesas fixas são aquelas que se repetem todo mês no seu orçamento ou então que variam muito pouco. São aquelas contas que já sabemos o valor. Entra mês, sai mês e elas estão lá. Em geral, elas não costumam causar surpresas. Ou seja, o valor cobrado será o mesmo todo mês, salvo o período de reajustes pela lei. </Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.content_title}>2. Tipos de despesas fixas</Text>
                                    <View>
                                        <Text style={styles.scrollable_view_content}>Aluguel e condomínio</Text>
                                        <Text style={styles.scrollable_view_content}>Alimentação (supermercado, feira, açougue, quitanda, padaria, etc.);</Text>
                                        <Text style={styles.scrollable_view_content}>Água, Luz, gás  </Text>
                                        <Text style={styles.scrollable_view_content}>Plano de TV, internet e celular;  </Text>
                                        <Text style={styles.scrollable_view_content}>Seguros (imóvel, veículo, celular, etc.);  </Text>
                                        <Text style={styles.scrollable_view_content}>Serviços por assinatura (Netflix, Spotify, Disney+, etc.);  </Text>
                                        <Text style={styles.scrollable_view_content}>Serviço de limpeza e lavanderia;  </Text>
                                        <Text style={styles.scrollable_view_content}>Impostos fixos (ex.: guia mensal do MEI e IPTU);  </Text>
                                        <Text style={styles.scrollable_view_content}>Mensalidade da faculdade, academia, curso, etc.;  </Text>
                                        <Text style={styles.scrollable_view_content}>Clubes de assinatura (livros, vinhos, roupas, etc.);  </Text>
                                        <Text style={styles.scrollable_view_content}>Mensalidades de serviços profissionais (professor particular, psicólogo, contador, etc.).  </Text>
                                    </View>
                                </View>
                            </ScrollView>
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
    content_title2 :{
        color: '#fafafa',
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 14

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
        marginHorizontal: 20
    },
    image_container: {
        flex: 1,
        maxHeight: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:30
    },
    image: {
        height: '100%',
        aspectRatio: 1,
    }
})
