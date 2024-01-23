import Item from './Item'

function List(){
    return (
    <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Nike"/>
            <Item marca="Adidas"/>
            <Item marca="Puma"/>
            <Item marca="Fila"/>
        </ul>
    </>
    )
}
export default List