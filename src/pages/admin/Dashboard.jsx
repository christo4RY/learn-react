import { useContext } from "react"
import { BookStore } from "../../store/BookProvider"

const Dashboard = () => {
const {data} = useContext(BookStore)
return (
<div>
    <div className="overflow-x-auto mt-10">
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </th>
                    <th>Image</th>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                {
                data?.map(product=>{
                return (
                <tr key={product.id}>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </th>
                    <td>
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={product.avatar} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </td>
                    <td>
                        {product.book_name}
                    </td>
                    <td>{product.author}</td>
                    <td>{product.category}</td>
                    <td className="  space-x-3 ">
                        <button className="btn btn-sm btn-outline btn-info">Edit</button>
                        <button className="btn btn-sm btn-outline btn-error">Delete</button>
                    </td>
                </tr>

                )
                })
                }

            </tbody>
        </table>
    </div>
</div>
)
}

export default Dashboard
