import React from 'react'
import './collections.css'
import NextArrow from '../carousal/nextArrow';
import PrevArrow from '../carousal/prevArrow';
import Slider from 'react-slick';

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const Collection = ({ list }) => {
  return (
    <div className='collection-wrapper'>
      <div className='max-width collection'>
        <div className='collection-title'>Collections</div>
        <div className='collection-subtitle-row'>
          <div className='collection-subtitle-text'>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bengalore, based on trends
          </div>
          <div className='collection-location cursor-point'>
            <div >All collections in Bengalore</div>
            <svg xmlns="http://www.w3.org/2000/svg" height={14} fill="currentColor" className="bi bi-caret-right-fill caret-icon absolute-center" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </div>
        </div>
        <Slider {...settings}>
          {
            list.map((item, i) => {
               return <div key={i}>
                <div className='colletion-cover cursor-point'>
                  <img src={item.cover} alt={item.title} className="collection-cover-image" />
                  <div className='gradient-bg'></div>
                  <div className='collection-card-title'>{item.title}</div>
                  <div className='collection-card-subtitle'>
                    {item.places}
                    <svg xmlns="http://www.w3.org/2000/svg" height={12} fill="currentColor" className="bi bi-caret-right-fill caret-icon absolute-center" viewBox="0 0 16 16">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                  </div>

                </div>
              </div>
            })
          }
        </Slider>
      </div>
    </div>
  )
}
export default Collection
