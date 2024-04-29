import React from "react";

const Lista = () =>{

const [items,setItems]= React.useState(['item 1'])

function HandleClick(){
    setItems([...items,"item" + (items.length + 1)])
}
function RemoveItem(){
 const novaLista = [...items]
 novaLista.pop()
 setItems(novaLista)
}
    return(
        <>
     {items.map((item,index) => (
        <li key={index}>{item}</li>
     ))}

     <button onClick={HandleClick} >Adicionar item</button>
     <button onClick={RemoveItem}> Remover</button>
     </>
    )
}

 export default Lista; 