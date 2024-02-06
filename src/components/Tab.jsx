import { useContext } from "react"
import { BookStore } from "../store/BookProvider"
import {Link, useNavigate } from 'react-router-dom'

const Tab = () => {
const {data:products,setQuery,query} = useContext(BookStore)
const nav = useNavigate()
const handleQuery = (query) => {
setQuery(query)
nav(`/books?category=${query}`)
}
return (
<div role="tablist" className="tabs tabs-boxed mt-4 mb-6 md:grid flex flex-wrap">
    <Link role="tab" className={`tab hover:bg-indigo-500 hover:text-white duration-200 ${query == null || query == 'all' ? 'tab-active' : ''}`} onClick={()=>handleQuery('all')}>All</Link>
    {
    products?.map(product=>{
    return (<li onClick={()=>handleQuery(product?.category)} key={product?.id} role="tab"
        className={`tab hover:bg-indigo-500 hover:text-white duration-200 ${query == product?.category ? 'tab-active' : ''}`}>{product?.category}</li>)
    })
    }
</div>
)
}

export default Tab
