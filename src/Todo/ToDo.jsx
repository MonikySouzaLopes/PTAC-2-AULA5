import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css"


export default function ToDo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
   const [tipo, setTipo ] = useState("");
   const [marca, setMarca ] = useState("");
   const [preco, setPreco ] = useState("");
   const [img, setImg] = useState("");
   const [lista, setLista ] = useState(listaLocalStorage || []);
   const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

   useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista));
  }, [lista]);

    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                tipo: tipo, marca:marca, preco:preco, img:img,

                id: id
        }]);
        setId(id + 1);
        setTipo("");
        setMarca("");
        setPreco("");
        setImg("");
        console.log(id)
    };

    const remover = (id) => {
        const auxLista = lista.filter((item) => item.id !== id);
        setLista(auxLista);
      }

    return (
        <div>
            <Link to="/">home</Link>
            <h1>Adicionar óculos em sua coleção</h1>  
            <div classname="flex.conteiner"> 
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
            <p><strong>URL da Imagem:</strong></p>
            &emsp;
            <input value={img} type="text"
            onChange={(e)=>{ setImg(e.target.value)}}/>
            &emsp;
            <button className="btn btn-dark">ADD</button>
            </form>   
            </div>    
            {lista.map((ativ)=>
            <div key= {ativ.id}>
                <Link to={`/detalhe/${ativ.id}`}>
                <p><strong>Tipo:</strong>{ativ.tipo}</p>
                </Link>
                <p><strong>Marca:</strong>{ativ.marca}</p>
                <p><strong>Preço:</strong>R${ativ.preco}</p>
                <p><strong>Imagem:</strong></p>
                <img src={ativ.img} alt="" />
                <br />
                <br />
                <button class="btn btn-outline-danger"onClick={() => remover(ativ.id)}>Remover</button>
            </div>
            )} 
        </div>
    );
}