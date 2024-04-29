import React from "react"
const App = () =>{
  
    const[contar, setContar] = React.useState(0)
    function Crescente(){
        setContar(contar +1)
    }
    function Decrescente (){
        setContar(contar-1)
    }
    return(
        <>
    <button onClick={Decrescente}>-</button>
    <span>{contar}</span>
    <button onClick={Crescente}>+</button>
    </>
    )
  }
 export default App;