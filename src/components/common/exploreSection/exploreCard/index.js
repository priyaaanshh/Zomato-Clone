import React from 'react'
import './ExploreCard.css'
const ExploreCard = ({ restaurant, i }) => {

  const name = restaurant?.info?.name ?? '';
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const distance = restaurant?.distance;
  const address = restaurant?.locality?.name;
  const openTime = restaurant?.timing?.text;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item, i) =>(item.name))
    .slice(0, 3);

  const bottomContainer = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
        ? offers[0].text
        : null;

  return (
    <div className={`explore-card cursor-point ${i < 3 ? "explore-card-first" : ""}`}>
      <div className='explore-card-cover'>
        <img
          src={coverImg}
          alt={name}
          className='explore-card-image'
        />
        <div className='delivery-time'>{deliveryTime ? deliveryTime : distance}</div>
        {proOff && <div className='pro-off'>{proOff}</div>}
        {goldOff && <div className='gold-off absolute-center'>{goldOff}</div>}
        {discount && <div className='discount absolute-center'>{discount}</div>}
      </div>

      <div className='res-row'>
        <div className='res-name'>{name}</div>
        {rating && (
          <div className='res-rating absolute-center'>
            {rating}
            <svg xmlns="http://www.w3.org/2000/svg" height={'10px'} fill={'var(--primary-bg)'} style={{ marginLeft: '2px' }} className="bi bi-star-fill absolute-center" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
        )}
      </div>
      <div className='res-row'>
        {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, i) => (
              <span className="res-cuisine-tag" key={i}>
                {item}
                {i !== cuisines.length - 1 && ","}
              </span>
            ))}
          </div>
        )}
        {approxPrice && <div className='res-price'>{approxPrice}</div>}
        {address && <div >{address}</div>}
        {openTime && <div >{openTime}</div>}
      </div>

      {bottomContainer.length > 0 && <div>
        <div className='card-seperator'></div>
        <div className='explore-bottom'>
          <img src={bottomContainer[0]?.image?.url} alt={bottomContainer[0]?.text} style={{ height: '18px' }} />
          <div className='res-bottom-text'>{bottomContainer[0]?.text}</div>
        </div>
      </div>}
    </div>
  )
}

export default ExploreCard
