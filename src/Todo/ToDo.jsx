import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"


export default function ToDo() {
   const [tipo, setTipo ] = useState("");
   const [marca, setMarca ] = useState("");
   const [preco, setPreco ] = useState("");
   const [lista, setLista ] = useState([]);
   const [id,setId] = useState(1);
    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                tipo: tipo, marca:marca, preco:preco, 

                id: id
        }]);
        setId(id + 1);
        setTipo("");
        setMarca("");
        setPreco("");
    };

    return (
        <div>
            <Link to="/">home</Link>
            <h1>Adicionar óculos em sua coleção</h1>  
            <div class="flex.conteiner"> 
            <form onSubmit={salvar}>
                <p><strong>Tipo:</strong></p>
                &emsp;
            <input value={tipo} type="text"
            onChange={(e)=>{ setTipo(e.target.value)}}/>
             <p><strong>Marca:</strong></p>
          &emsp;
         
            <input value={marca} type="text"
            onChange={(e)=>{ setMarca(e.target.value)}}/>
            <p><strong>Preço:</strong></p>
           &emsp;
           
            <input value={preco} type="text"
            onChange={(e)=>{ setPreco(e.target.value)}}/>
            &emsp;
            <button class="btn btn-dark">ADD</button>
            </form>   
            </div>    
            {lista.map((ativ)=>
            <div key= {ativ.id}>
               
                <p><strong>Tipo:</strong>{ativ.tipo}</p>
                <p><strong>Marca:</strong>{ativ.marca}</p>
                <p><strong>Preço:</strong>R${ativ.preco}</p>
            </div>
            )} 
        </div>
    );
}