import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema"
import { Estilos } from "./componentes/EstilosGlobais/Estilos"
//import { Rodape } from "./componentes/Rodape/Rodape"
//import { Cabecalho } from "./componentes/Cabecalho/Cabecalho"

function App () {
  return (

    <ProvedorTema>

      <Estilos/>
      
      
      <RouterProvider router={router} />

    </ProvedorTema>



  )
} 

export default App
