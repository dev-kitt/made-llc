import React from 'react'
import './team.css'
import AVTR1 from '../../assets/1kit.png'
import AVTR2 from '../../assets/2kit.png'
import AVTR3 from '../../assets/3kit.png'
import AVTR4 from '../../assets/4kit.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: '8Kit',
    title: 'Captain of Creation',
    review: 'Hey it⁠\'s me - 8Kit, and this is all of my stuff. I\'m a former Army Parachute Rigger turned Software Automation Expert currently spending my days engineering the automated testing efforts behind one of crypto\'s largest fintech companies. And this is my galaxy of passion! '
  },
  {
    avatar: AVTR2,
    name: '8Kit',
    title: 'Chief of Design',
    review: 'How do you feel about hard shelled tacos? Add in a few el Pastor with guac and diced onions. Pico de gallo, on the side please. Flour or corn tortillas? Tacos dorados called flautas, or taquitos, for which the tortillas are filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp.'
  },
  {
    avatar: AVTR3,
    name: '8Kit',
    title: 'Commander of Development',
    review: 'How do you feel about hard shelled tacos? Add in a few el Pastor with guac and diced onions. Pico de gallo, on the side please. Flour or corn tortillas? Tacos dorados called flautas, or taquitos, for which the tortillas are filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp.'
  },
  {
    avatar: AVTR4,
    title: 'Admiral of Daydreaming',
    name: '8Kit',
    review: 'How do you feel about hard shelled tacos? Add in a few el Pastor with guac and diced onions. Pico de gallo, on the side please. Flour or corn tortillas? Tacos dorados called flautas, or taquitos, for which the tortillas are filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp.'
  }
]

const Team = () => {
  return (
    <section id='team'>
      <h5>[ meet the ]</h5>
      <h2>Team</h2>
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