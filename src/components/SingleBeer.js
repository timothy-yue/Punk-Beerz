import React from 'react'

export default function SingleBeer(props) {
    
    const handleClick = () => {
        console.log(props.beer);
    }

    const { image_url, abv, description, ibu, tagline, name } = props.beer;

    const renderSingleBeer = () => {
        if(props.beer !== undefined) {
            return(
                <div className="container single-beer-container" onClick={handleClick}>
                    <div className="image-wrapper">
                        <img alt="beer" src={image_url} />
                        <h4 className="tagline">{tagline}</h4>
                    </div>
                    <div className="content-container">
                        <div className="name-container">
                            <h1>{name}</h1>
                        </div>
                        <div className="description-container">
                            <p>{description}</p>
                        </div>
                        <div className="stats-container">
                            <div className="abv">
                                <h4>ABV</h4>
                                <h5>{abv}</h5>
                            </div>
                            <div className="IBU">
                                <h4>IBU</h4>
                                <h5>{ibu}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <h2>Loading....</h2>
            )
        }
    }


    return (
        renderSingleBeer()
    )
}
