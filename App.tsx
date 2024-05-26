
import { useState } from "react";
import HomePage from "./Components/HomePage";
import Footer from "./src/Components/footer";
import TabCreditos from "./src/pagesdocx/pages/TabCreditos";
import TabEducacaoFinanceiraBasica from "./src/pagesdocx/pages/TabEducacaoFinanceiraBasica";
import TabDesafiosEMetas from "./src/pagesdocx/pages/TabDesafiosEMetas";
import TabDicasParaTodasAsIdades from "./src/pagesdocx/pages/TabDicasParaTodasAsIdades";
import TabPesquisaEComparacaoDePrecos from "./src/pagesdocx/pages/TabPesquisaEComparacaoDePrecos";
import TabPlanejamentoEOrcamento from "./src/pagesdocx/pages/TabPlanejamentoEOrcamento";
import TabSuaComunidadeFinanceira from "./src/pagesdocx/pages/TabSuaComunidadeFinanceira";
import { StatusBar } from "react-native";



export default function App() {

  const [currentScreen, setCurrentScreen] = useState('Home')

  const navigate = (screen) => {
    setCurrentScreen(screen);
  } 
  
  switch (currentScreen) {
    case 'Home': 
      screen = <HomePage navigate={navigate} />
      break
    case 'Creditos':
      screen = <TabCreditos  />
      break
    case 'Educacaobasica':
      screen = <TabEducacaoFinanceiraBasica  />
      break
    case 'desafiosemetas':
      screen = <TabDesafiosEMetas />
      break
    case 'dicastodasidades':
      screen = <TabDicasParaTodasAsIdades />
      break
    case 'pesquisacomparacao':
      screen = <TabPesquisaEComparacaoDePrecos />
      break
    case 'planejamentoorcamento':
      screen = <TabPlanejamentoEOrcamento />
      break
    case 'comunidadefinanceira':
      screen = <TabSuaComunidadeFinanceira />
    
  }
  
  var screen;

  return (
    <>
    <StatusBar/>
      {screen}
      <Footer navigate={navigate} />
    </>
    
  );
}
