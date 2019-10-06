import React, { useState } from 'react'

export default function Search({onSearch}) {
    const [search, setSearch] = useState('');
    const handleOnChange = (e) => {
        setSearch(e.target.value);
        onSearch(e.target.value);
    }
    return (
        <div className="search-container">
            <div className="search-wrapper">
                <input className="input searchbar" type="text" value={search} onChange={handleOnChange} placeholder="Search Beers...."/>
                <button className="button is-rounded is-medium is-success custom-btn">
                    <i className="fa fa-search" />
                </button>
            </div>
        </div>
    )
}
