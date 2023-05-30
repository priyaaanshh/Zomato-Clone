import React from 'react'
import "./ExploreSection.css"
import ExploreCard from './exploreCard'
const ExploreSection = ({ list, collectionName }) => {
  return (
    <div className='explore-section'>
      <div className='collection-title'>{collectionName}</div>
      <div className='explore-grid'>
        {list.map(
          (restaurant,i)=>{
            return <ExploreCard restaurant={restaurant} key={i} i={i}/>
          }
        )}
      </div>
    </div>
  )
}

export default ExploreSection
