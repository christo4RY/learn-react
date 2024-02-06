import { useContext, useEffect, useState } from "react"
import { BookStore } from "../../store/BookProvider"
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
const {data} = useContext(BookStore)
const [product,setProduct] = useState(null)
const {id} = useParams()
useEffect(()=>{
const find = data?.find(product=> product.id == id)
setProduct(find);
},[data])
return (
<div>
    <div className="text-sm breadcrumbs">
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>{product?.book_name}</li>
        </ul>
    </div>
    <div className="card mt-5 lg:card-side bg-base-100 shadow-xl">
        <figure><img src={product?.avatar} className=" w-80" alt="Album" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{product?.book_name}</h2>
            <div className=" space-x-3">
                <div className="badge badge-outline">{product?.category}</div>
                <div className="badge badge-outline">{product?.author}</div>
            </div>
            <p>{product?.description}</p>
            <div className="card-actions justify-end">
                <Link to='/' className="btn btn-primary">Back</Link>
            </div>
        </div>
    </div>
</div>
)
}

export default ProductDetail
