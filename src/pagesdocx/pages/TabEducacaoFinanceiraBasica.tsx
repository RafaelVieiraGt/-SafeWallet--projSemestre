import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TabEducacaoFinanceiraBasica() {
    return (
        <View style={styles.screen}>
            <View style={styles.title_container}>
                <Text style={styles.title}>Conceitos Fundamentais</Text>
            </View>
            <ScrollView>
                <View style={styles.contents_wrapper}>
                    <View style={styles.content}>
                        <Text style={styles.content_title}>Receitas</Text>
                        <ScrollView style={styles.scrollable_view}>
                            <Text style={styles.scrollable_view_content}>A receita é todo tipo de dinheiro recebido em troca de produtos ou serviços, ou seja, é o dinheiro, ou salário, ou retirada que você ganha para executar uma determinada função, atividade ou comercializar algum produto para outra pessoa, seja ela física ou jurídica. 

No entanto, nem toda entrada de dinheiro é classificada como receita. A aquisição de empréstimos e consignados é um exemplo claro de entrada, mas que não foi obtida em troca da prestação de serviços ou venda de produtos. Além disso, será preciso pagar com juros o valor emprestado, o que torna essa ação um exemplo de despesa. 

Os rendimentos obtidos com as aplicações financeiras, poupança e investimentos também devem ser receita, bem como rendas de aluguéis, já que eles representam um aumento do seu patrimônio mediante uma atividade específica. 

Outras receitas, como acordos judiciais, pensões alimentícias, e outros processos, também são considerados. Principais exemplos de fontes de receita 

comercialização de produtos para pessoas e/ou empresas; 

prestação de serviços para terceiros; 

salário ou retirada mensal; 

rendimento de aplicações e investimentos em geral; 

rendimentos de poupança; 

receitas de aluguel; 

outras receitas; </Text>
                        </ScrollView>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.content_title}>Despesas</Text>
                        <ScrollView style={styles.scrollable_view}>
                            <Text style={styles.scrollable_view_content}>As despesas podem ser encaradas como todo tipo de pagamento ou uso de recursos financeiros necessários para manutenção do patrimônio ou atividade em questão, um conceito também aplicável ao planejamento financeiro em diferentes posições. 

Para o orçamento doméstico, despesas são os gastos obrigatórios para manter sua qualidade de vida, e estão classificadas em FIXAS e VARIÁVEIS.</Text>
                        </ScrollView>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.content_title}>Poupanca</Text>
                        <ScrollView style={styles.scrollable_view}>
                            <Text style={styles.scrollable_view_content}>Poupança é a parte da renda que não é gasta imediatamente e é reservada para uso futuro. A poupança pode ser guardada em contas bancárias, embaixo do colchão (não recomendado), ou investida para render mais. A poupança é essencial para:

Reservas de Emergência: Dinheiro guardado para imprevistos, como reparos de emergência ou perda de emprego.
Objetivos Futuros: Compras maiores, como um carro, uma casa, ou viagens.</Text>
                        </ScrollView>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.content_title}>Investimento</Text>
                        <ScrollView style={styles.scrollable_view}>
                            <Text style={styles.scrollable_view_content}>Investimento é a aplicação de dinheiro em ativos ou instrumentos financeiros com a expectativa de obter um retorno ou lucro no futuro. Existem diferentes tipos de investimentos, como:

Ações: Compra de participações em empresas que podem valorizar ao longo do tempo.
Títulos de Renda Fixa: Como títulos do governo ou debêntures, que pagam juros periódicos.
Fundos Imobiliários: Investimento em propriedades através de fundos que geram renda com aluguéis.
CDBs e LCIs: Certificados de Depósito Bancário e Letras de Crédito Imobiliário, que oferecem rendimentos fixos ou atrelados a índices.</Text>
                        </ScrollView>
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
    scrollable_view: {
        backgroundColor: '#292929',
        flex: 1,
        borderRadius: 12,
        padding: 10
    },
    scrollable_view_content: {
        color: '#fafafa',
        marginVertical: 5,
        marginHorizontal: 10,
       

    }
})

// bg: #444242
// scroll: #cc2229
// scroll-content-bg: #292929