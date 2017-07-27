import React from 'react';
import './Item.css';

const Item = (props) => (
    <div className="item-element">
        <div className="item-name">{props.name}</div>
        <div className="item-price">{props.price}€</div>
        <div className="item-description">{props.description}</div>
    </div>    
)

export default Item;