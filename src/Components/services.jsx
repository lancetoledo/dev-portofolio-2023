//src/Components/services.jsx

import React from 'react'
import servicIcon_01 from '../assets/images/icons/pen-yellow.png'
import servicIcon_02 from '../assets/images/icons/code.png'
import servicIcon_03 from '../assets/images/icons/search-yellow.png'
import servicIcon_04 from '../assets/images/icons/marketing.png'
import servicIcon_05 from '../assets/images/icons/code-white.png'
import servicIcon_06 from '../assets/images/icons/marketing-white.png'
import SingleCountdown from '../SingleFeatures/SIngleCountdown'
import SectionTitle from './section_title'

// New formatting function
const formatNumber = (num) => `${num.toLocaleString()} +`;

export default function Services() {
  return (
    <div className='services-area section-ptb bgs' id='services'>
      <div className='container'>
        <SectionTitle
          title='SERVICES'
          subTitle='What I Am Great At'
          desc='I excel at innovating, learning new systems and using my resourcefulness to maximize any area of my career. This lead me to be a Fullstack Developer, A Lead Coding Instructor and helping grow a Coding Channel to 1M+ Subs'
        />
      </div>
      <div className='container'>
        <div className='row service-row mt-45'>
          {/* Service Item 1: Web Development */}
          <div className='col-md-3 col-sm-6 mb-4 mb-md-0'>
            <div className='project-card text-center bgp'>
              <div className='icon mb-20'>
                <img src={servicIcon_05} alt='design' />
                <img className='d-none' src={servicIcon_02} alt='design' />
              </div>
              <div className='skill-project'>
                <h4 className='mb-3'>Web Development</h4>
                <p>22 projects</p>
              </div>
            </div>
          </div>
          {/* Service Item 2: YT Videos Made */}
          <div className='col-md-3 col-sm-6 mb-4 mb-md-0'>
            <div className='project-card text-center bgp'>
              <div className='icon mb-20'>
                <img src={servicIcon_06} alt='design' />
                <img className='d-none' src={servicIcon_04} alt='design' />
              </div>
              <div className='skill-project'>
                <h4 className='mb-3'>YT Videos Made</h4>
                <p>64 projects</p>
              </div>
            </div>
          </div>
          {/* Service Item 3: UI/UX Design */}
          <div className='col-md-3 col-sm-6 mb-4 mb-md-0'>
            <div className='project-card text-center bgp'>
              <div className='icon mb-20'>
                <img src={servicIcon_01} alt='design' />
                <img className='d-none' src={servicIcon_02} alt='design' />
              </div>
              <div className='skill-project'>
                <h4 className='mb-3'>UI/UX Design</h4>
                <p>2 projects</p>
              </div>
            </div>
          </div>
          {/* Service Item 4: Web Research */}
          <div className='col-md-3 col-sm-6 mb-4 mb-md-0'>
            <div className='project-card text-center bgp'>
              <div className='icon mb-20'>
                <img src={servicIcon_03} alt='design' />
                <img className='d-none' src={servicIcon_03} alt='design' />
              </div>
              <div className='skill-project'>
                <h4 className='mb-3'>Web Research</h4>
                <p>46 projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Area */}
      <div className='counter-area mt-45'>
        <div className='container'>
          <div className='row'>
            {/* Counter 1: Years of Experience */}
            <SingleCountdown
              extraClass='mb-4 mb-md-0'
              title='Years of Experience'
              start={0}
              end={4}
              duration={7}
              formattedValue={formatNumber(4)}
            />
            {/* Counter 2: Students Taught */}
            <SingleCountdown
              extraClass='mb-4 mb-md-0'
              title='Students Taught'
              start={0}
              end={76}
              duration={9}
              formattedValue={formatNumber(76)}
            />
            {/* Counter 3: Days Coding */}
            <SingleCountdown
              extraClass='mb-4 mb-md-0'
              title='Days Coding'
              start={0}
              end={899}
              duration={7}
              formattedValue={formatNumber(899)}
            />
            {/* Counter 4: Clients Served */}
            <SingleCountdown
              title='Clients Served'
              start={0}
              end={11}
              duration={10}
              formattedValue={formatNumber(11)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}