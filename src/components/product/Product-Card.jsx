import { Link } from "react-router-dom"

const ProductCard = ({product}) => {
return (
<div className="card md:w-80 w-full lg:w-72 bg-base-100 shadow-xl">
    <figure><img src={product?.avatar} className="md:w-80 w-full lg:w-72 h-48 md:h-64 object-cover object-bottom" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title flex justify-between ">
            <Link to={`/books/${product?.id}`} className=" text-blue-500">
                {product?.book_name}
            </Link>
            <div className="badge badge-secondary text-xs md:text-base">NEW</div>
        </h2>
        <p>{product?.description.slice(0,50)+"..."}</p>
        <div className="card-actions justify-end">
            <div className="badge badge-outline">{product?.category}</div>
            <div className="badge badge-outline">{product?.author}</div>
        </div>
    </div>
</div>
)
}

export default ProductCard
