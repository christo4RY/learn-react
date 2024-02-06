import { useContext, useEffect, useState } from "react"
import ProductCard from "./../../components/product/Product-Card"
import { BookStore } from "../../store/BookProvider"
const Product = () => {
const {data,query,search} = useContext(BookStore)
const [products,setProducts] = useState()
const [mainProducts,setMainProducts] = useState()
useEffect(()=>{
if(query && query != 'all'){
setProducts( data?.filter(pro=>pro.category == query))
}else if(query == 'all'){
    setProducts(mainProducts)
}
else{
setMainProducts(data)
setProducts(mainProducts)
}
},[data,query,mainProducts])

useEffect(()=>{
    setProducts(mainProducts?.filter(product=>product.book_name.toLowerCase().includes(search.toLowerCase())))
},[search])
return (
<div className="p-2 md:p-0 grid grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-6">
    {
    products?.map(product=> {
    return (
    <ProductCard key={product.id} product={product} />
    )
    })
    }
</div>
)
}

export default Product
