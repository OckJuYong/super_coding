import React, { useState, useEffect } from 'react';
import './search.css';

const Search = () => {
    const [userSearch, setUserSearch] = useState("");

    const inputChangeHandler = (e) => {
        setUserSearch(e.target.value);
    }

    const searchFormHandler = () => {
        // 여기서 다음페이지로 넘어가지게 설정해야함
    }

    return (
        <div className='search_main_container'>
            <input 
                type='text'
                value={userSearch}
                onChange={inputChangeHandler}
                placeholder='Search...'
                className='search_input_box'
            />
            <button className='search_form' onClick={searchFormHandler}>검색하기</button>
        </div>
    );
};

export default Search;