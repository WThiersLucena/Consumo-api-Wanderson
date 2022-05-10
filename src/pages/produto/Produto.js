import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseAPI } from '../../environments'
import ProdutoItem from "../../components/produtoItem/ProdutoItem"


export default function Produto() {
    const { id } = useParams()
    const [produto, setProduto] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3001/produtos/${id}`)
            .then((response) => {
                setProduto(response.data)
            })
    }, [])
    return (
        <ProdutoItem produto={produto} />
    )
}
