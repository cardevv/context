import { createContext } from "react";



const usuarioInicial = {

    perfil: "",
    interesse: "",
    nomeCompleto: "",
    uf: "",
    cidade: "",
    email: "",
    senha: "",
    senhaConfirmada: ""

}




const CadastroUsuarioContext = createContext({

    usuario: usuarioInicial,
    setPefil:  () => null,
    setInteresse:  () => null,
    setNomeCompleto:  () => null,
    setUf:  () => null,
    setCidade:  () => null,
    setEmail:  () => null,
    setSenha:  () => null,
    setSenhaConfirmada:  () => null


})