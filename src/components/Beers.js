import React from 'react'
import Box from './Box';
import Search from './Search';


export default function Beers(props) {
    console.log("Render happened ---> Beer");
    const { loading, data, toggleFavorite, history, onSearch } = props;
    
    return (
        <>
        <Search onSearch={onSearch} />
        <div className="container is-fluid">
            <div className="columns is-ancestor flex-wrap">
            {
                loading 
                ? <h1>Loading ...</h1> 
                : data.map(beer => (
                <Box beer={beer} key={beer.id} toggleFavorite={toggleFavorite} history={history}/>
                ))
            }
            </div>
      </div>
      </>
    )
}
