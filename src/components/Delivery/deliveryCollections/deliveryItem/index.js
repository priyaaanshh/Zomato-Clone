import React from 'react'
import "./DeliveryItem.css";
const DeliveryItem = ({cover, title}) => {
    return (
        <div>
            <div className='delivery-item-cover cursor-point'>
                <img src={cover}
                    className='delivery-item-image'
                    alt={title} />
            </div>
            <div className='delivery-item-title cursor-point'>{title}</div>
        </div>
    )
}

export default DeliveryItem
