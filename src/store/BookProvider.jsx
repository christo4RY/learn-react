import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { getBooks } from "../services/book.service";


const books = {
data:null,
loading:false,
error:null,
query:null,
setQuery:null,
search:"",
setSearch:null
};

export const BookStore = createContext(books);


export const BookProvider = ({children}) => {
const [query,setQuery] = useState(new URLSearchParams(location.search).get('category'))
 const [search,setSearch] = useState("")

const {data,loading,error} = useFetch(getBooks,'books')
return (
<BookStore.Provider value={{ data, loading, error,query,setQuery ,search,setSearch}}>
    {children}
</BookStore.Provider>
)
}
