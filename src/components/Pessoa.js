function Pessoa({foto, nome, idade, profissao}){
    return(
    <div>
    <img src={foto} alt={nome} />
    <p>Nome: {nome}</p>
    <p>Idade: {idade}</p>
    <p>Profissão: {profissao}</p>
    </div>
    )
}
export default Pessoa;