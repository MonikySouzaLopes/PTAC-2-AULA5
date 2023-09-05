import { useState } from "react";
import { Link } from "react-router-dom";


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
            <h1>Lista de produtos</h1>    
            <form onSubmit={salvar}>
            <input value={tipo} type="text"
            onChange={(e)=>{ setTipo(e.target.value)}}/>
          &emsp;
            <input value={marca} type="text"
            onChange={(e)=>{ setMarca(e.target.value)}}/>
           &emsp;
            <input value={preco} type="text"
            onChange={(e)=>{ setPreco(e.target.value)}}/>
            &emsp;
            <button>ADD</button>
            </form>      
            {lista.map((ativ)=>
            <div key= {ativ.id}>
               
                <p>Tipo:{ativ.tipo}</p>
                <p>Marca:{ativ.marca}</p>
                <p>Preço:R${ativ.preco}</p>
            </div>
            )} 
        </div>
    );
}