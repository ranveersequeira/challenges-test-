import React, { useState, useEffect, useMemo } from 'react'
import './navbar.css'
import debounce from 'lodash.debounce';
import { options } from '../src/App'
function NavBar({ setSearchResult }: any) {
    const [searchTerm, setSearchTerm] = useState("");
    const fetchData = async () => {
        const data = await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=20&autoCorrect=true`, options)
            .then(response => response.json())
            .then(response => response.value)
            .catch(err => console.error(err));
        // console.log("datahere", data)
        setSearchResult(data)
    }
    const onChangeHandler = async (evt: any) => {
        setSearchTerm(evt.target.value);
        if (searchTerm.length > 2) {
            fetchData();
        }


    };
    const debouncedResults = useMemo(() => {
        return debounce(onChangeHandler, 400);
    }, []);





    return (
        <div className='container'>
            <div className='left'>My Gallary</div>
            <div >
                <input type="text" className='search' onChange={debouncedResults} />
            </div>
            <div className='right'>
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default NavBar