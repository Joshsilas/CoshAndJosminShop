import React, {useEffect, useState} from "react";
import './Searchbar.css'

const SearchBar = ({handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const[data, setData]=useState([])

    const url = 'https://fakestoreapi.com/products';

    const fetchProducts = async () => {
        try{
            const response = await fetch(url)
            const products = await response.json()
            setData(products)
        } catch(err) {
            console.log(err)}
    }

    const performSearch = (e) => {
        setSearchTerm(e.target.value)
    };

    useEffect(() => {
        handleSearch(searchTerm);
}, [searchTerm, handleSearch]);


    return (
        <>
            <form>
                <input
                    className='search'
                    type='input'
                    placeholder="What would you like to find"
                    value={searchTerm}
                    onChange={performSearch}
                />
            </form>
            {
                data.filter((row)=> {
                    if search =="") {
                        return row;
                    }
                    else if (row.title.toLowerCase().includes(search.toLowerCase())){
                        return row;
                    }
                })
                    .map((row, i) => {})
            }
    </>
    )
}
export default SearchBar