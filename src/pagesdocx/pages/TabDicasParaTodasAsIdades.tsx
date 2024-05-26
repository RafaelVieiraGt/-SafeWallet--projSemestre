import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TabDicasParaTodasAsIdades() {
    return (
        <View style={styles.screen}>
            <View style={styles.title_container}>
                <Text style={styles.title}>Dicas Para Todos</Text>
            </View>
            <ScrollView>
                <View style={styles.contents_wrapper}>
                    <View style={styles.content}>
                        <Text style={styles.content_title}>Jovens</Text>
                        <ScrollView style={styles.scrollable_view}>
                            <Text style={styles.scrollable_view_content}>Aprenda sobre finanças pessoais, investimentos e crédito. Livros, blogs e cursos online são ótimos recursos.
Crie um orçamento para acompanhar seus gastos e renda. Use aplicativos de finanças pessoais para facilitar o controle.
Poupança de Emergência: Estabeleça um fundo de emergência equivalente a 3-6 meses de despesas.
Investimento Precoce: Comece a investir cedo. Mesmo pequenas quantias podem crescer significativamente com o tempo devido aos juros compostos.
Evite Dívidas Desnecessárias: Use o crédito com responsabilidade. Evite endividar-se para compras não essenciais.</Text>
                        </ScrollView>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.content_title}>Familias</Text>
                        <ScrollView style={styles.scrollable_view}>
                            <Text style={styles.scrollable_view_content}>Faça um orçamento que inclua todas as despesas da família, como moradia, alimentação, educação e lazer.
Fundo de Emergência Familiar: Tenha uma reserva financeira suficiente para cobrir pelo menos 6 meses de despesas familiares.
Proteção com Seguros: Considere seguros de saúde, vida e patrimônio para proteger a família de imprevistos.
Educação dos Filhos: Planeje e poupe para a educação futura dos filhos, considerando investimentos como planos de previdência privada ou fundos de educação.
Objetivos Financeiros Compartilhados: Estabeleça metas financeiras comuns, como a compra de uma casa ou viagens, e planeje como atingi-las juntos.</Text>
                        </ScrollView>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.content_title}>Terceira Idade</Text>
                        <ScrollView style={styles.scrollable_view}>
                            <Text style={styles.scrollable_view_content}>Avalie sua situação financeira atual, considerando aposentadoria e outras fontes de renda.
Poupança e Investimentos Conservadores: Concentre-se em investimentos de baixo risco para preservar o capital, como títulos de renda fixa e CDBs.
Plano de Saúde e Seguros: Garanta que você tenha uma cobertura de saúde adequada e considere seguros de vida e funeral.
Planejamento de Herança: Considere a elaboração de um testamento e planejamento sucessório para garantir que seus bens sejam distribuídos conforme desejado.
Estilo de Vida Sustentável: Adapte seu estilo de vida para viver confortavelmente dentro dos seus meios, priorizando despesas essenciais e atividades que trazem prazer e bem-estar.</Text>
                        </ScrollView>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.content_title}>Geral</Text>
                        <ScrollView style={styles.scrollable_view}>
                            <Text style={styles.scrollable_view_content}>Educação Financeira Contínua: Mantenha-se informado sobre finanças pessoais e mercado financeiro. O conhecimento é a chave para decisões financeiras inteligentes.
Orçamento e Controle de Gastos: Independente da fase da vida, manter um orçamento e controlar gastos é fundamental para a saúde financeira.
Poupança de Emergência: Ter um fundo de emergência é crucial para lidar com imprevistos sem recorrer a dívidas.
Diversificação de Investimentos: Não coloque todos os ovos na mesma cesta. Diversifique seus investimentos para minimizar riscos.
Planejamento de Longo Prazo: Pense no futuro e estabeleça metas financeiras a curto, médio e longo prazo, ajustando seu planejamento conforme necessário.</Text>
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
        padding:10,
        borderRightWidth: 2,
        borderRightColor: '#cc2229'
    },
    scrollable_view_content: {
        color: '#fafafa',
        marginVertical: 5,
        marginHorizontal: 10
    }
})

// bg: #444242
// scroll: #cc2229
// scroll-content-bg: #292929