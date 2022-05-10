import React from "react";
import { Link } from "react-router-dom";


 function ProdutoItem(props) {

    const produto = props.produto || []

    return (
        <>
            <h1>Produto</h1>
            <h3>{produto.nome}</h3>
            {
                <div>
                    <div>
                        <img width="250" src={produto.imgUrl} />
                    </div>
                    <h2>{produto.id} {produto.nome} R${produto.preco}</h2>
                    <Link to="/">Voltar para home</Link>
                </div>
            }
        </>
    )
}

export default ProdutoItem
