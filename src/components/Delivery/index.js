import React from 'react'
import "./Delivery.css";
import Filters from '../common/filters';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './TopBrands';
import ExploreSection from '../common/exploreSection';
import { Restaurants } from '../../data/restaurants';

const deliveryFilters = [
  {
    id: 1,
    icon:
      <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-sliders filter-icon" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z" />
      </svg>,
    title: "Filters"
  },
  {
    id: 2,
    title: "Rating: 4.0+"
  },
  {
    id: 3,
    title: "Safe and Hygienic"
  },
  {
    id: 4,
    title: "Pure Veg"
  },
  {
    id: 5,
    icon:
      <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-arrow-down-up filter-icon" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
      </svg>,
    title: "Delivery Time"
  },
  {
    id: 6,
    title: "Great Offers"
  }
]
const restaurantsList = Restaurants;
const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filtersList={deliveryFilters} />
      </div>
      <DeliveryCollections className="absolute-center" />
      <TopBrands className="absolute-center" />
      <div className="max-width absolute-center">
        <ExploreSection list={restaurantsList} collectionName='Delivery Restaurants in Bengalore' />
      </div>
    </div>
  )
}

export default Delivery
