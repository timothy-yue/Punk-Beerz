import React from 'react';

export default function Box(props) {

    console.log("Render happned --> Box");
    const { toggleFavorite, history } = props;
    const { id, description } = props.beer;
    const newDescription = description.substring(0, 140) + (description.length > 140 ? "..." : "");
    const fav = props.beer.favorite;

    const handleClick = () => {
        history.push(`/beer/${id}`);
    }

    return (
        <div className="column is-one-third-desktop is-half-tablet is-parent">
            <div className="box is-child beer-tile" onClick={handleClick}>
                <div className="favorite-bar" onClick={(e) => toggleFavorite(e,id)}>
                    <i className={'fa ' + (fav !== undefined && fav === true ? 'fa-star fav' : 'fa-star-o')} />
                </div>
                <div className="beer-information">
                    <img src={props.beer.image_url} alt="Beer" />
                    <p className="shorten-description">
                        <strong>
                            {props.beer.name}
                        </strong>
                        <br />
                        {newDescription}
                    </p>
                </div>
                <i className="arrow-right fa fa-angle-double-right" />
            </div>
        </div>
    )
}
