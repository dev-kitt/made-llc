import React from 'react'
import './team.css'
import AVTR1 from '../../assets/1kitt.png'
import AVTR2 from '../../assets/2kitt.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'KEITH [DEV]',
    title: '🌮🌮🐿️',
    review: 'I\'m a former Army Parachute Rigger turned Software Automation Engineer currently spending my days driving the automated testing efforts for a leading Green Energy tech startup. This is a side project I started with my neighbor Ray. Say Hi Ray!'
  },
  {
    avatar: AVTR2,
    name: 'RAY [DEV]',
    title: '🍩🍩🐇',
    review: 'Hi Ray...I mean, I\'m Ray, the other "kitt" in this kaboodle and reluctant neighbor of Keith\'s. When I\'m not dodging HOA meetings and working on unpaid side-gigs, I spend my days consulting as a Data Engineer and Power BI Developer for Fortune 500 companies.'
  }
]

const Team = () => {
  return (
    <section id='team'>
      <h2>Team</h2>
      <h5>[ Kitt Krew ]</h5>
      <br></br>
      <br></br>

      <Swiper className="container team__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar, title, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="kit">
              <div className="client__avatar">
                <img src={avatar} alt="team" />
              </div>
              <h5 className='cleint__title'>{title}</h5>
              <h3 className='cleint__name'>{name}</h3>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Team