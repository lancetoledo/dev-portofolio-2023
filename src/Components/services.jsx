import React from 'react' // Import React library
import servicIcon_01 from '../assets/images/icons/pen-yellow.png' // Import service icon for UI/UX Design
import servicIcon_02 from '../assets/images/icons/code.png' // Import service icon for Web Development
import servicIcon_03 from '../assets/images/icons/search-yellow.png' // Import service icon for Web Research
import servicIcon_04 from '../assets/images/icons/marketing.png' // Import service icon for Marketing/YT Videos Made
import servicIcon_05 from '../assets/images/icons/code-white.png' // Import alternate service icon for Web Development (white version)
import servicIcon_06 from '../assets/images/icons/marketing-white.png' // Import alternate service icon for Marketing (white version)
import SingleCountdown from '../SingleFeatures/SIngleCountdown' // Import SingleCountdown component (note: 'SIngleCountdown' might be a typo)
import SectionTitle from './section_title' // Import SectionTitle component

export default function Services() { // Define the Services functional component
  return (
    <div className='services-area section-ptb bgs' id='services'> {/* Services section container with padding and background styles */}
      <div className='container'> {/* Bootstrap container for responsive padding */}
        <SectionTitle
          title='SERVICES' // Main section title
          subTitle='What I Am Great At' // Section subtitle
          desc='I excel at innovating, learning new systems and using my resourcefulness to maximize any area of my career. This lead me to be a Fullstack Developer, A Lead Coding Instructor and helping grow a Coding Channel to 1M+ Subs' // Section description
        />
      </div>
      <div className='container'> {/* Another container for the services grid */}
        <div className='row service-row mt-45'> {/* Bootstrap row with top margin for spacing */}
          {/* Service Item 1: Web Development */}
          <div className='col-md-3 col-sm-6 mb-4 mb-md-0'> {/* Responsive column */}
            <div className='project-card text-center bgp'> {/* Card container */}
              <div className='icon mb-20'> {/* Icon container */}
                <img src={servicIcon_05} alt='design' /> {/* Alternate icon for Web Development */}
                <img className='d-none' src={servicIcon_02} alt='design' /> {/* Hidden main icon */}
              </div>
              <div className='skill-project'> {/* Service details */}
                <h4 className='mb-3'>Web Development</h4> {/* Service title */}
                <p>22 projects</p> {/* Number of projects */}
              </div>
            </div>
          </div>
          {/* Service Item 2: YT Videos Made */}
          <div className='col-md-3 col-sm-6 mb-4 mb-md-0'> {/* Responsive column */}
            <div className='project-card text-center bgp'> {/* Card container */}
              <div className='icon mb-20'> {/* Icon container */}
                <img src={servicIcon_06} alt='design' /> {/* Alternate icon for Marketing/YT Videos Made */}
                <img className='d-none' src={servicIcon_04} alt='design' /> {/* Hidden main icon */}
              </div>
              <div className='skill-project'> {/* Service details */}
                <h4 className='mb-3'>YT Videos Made</h4> {/* Service title */}
                <p>64 projects</p> {/* Number of projects */}
              </div>
            </div>
          </div>
          {/* Service Item 3: UI/UX Design */}
          <div className='col-md-3 col-sm-6 mb-4 mb-md-0'> {/* Responsive column: 4 per row on medium screens, 2 on small screens */}
            <div className='project-card text-center bgp'> {/* Card container with text centered and background pattern */}
              <div className='icon mb-20'> {/* Icon container with bottom margin */}
                <img src={servicIcon_01} alt='design' /> {/* Main icon for UI/UX Design */}
                <img className='d-none' src={servicIcon_02} alt='design' /> {/* Hidden alternate icon (possibly for hover effect) */}
              </div>
              <div className='skill-project'> {/* Container for service title and project count */}
                <h4 className='mb-3'>UI/UX Design</h4> {/* Service title */}
                <p>2 projects</p> {/* Number of projects in this category */}
              </div>
            </div>
          </div>
          {/* Service Item 4: Web Research */}
          <div className='col-md-3 col-sm-6 mb-4 mb-md-0'> {/* Responsive column */}
            <div className='project-card text-center bgp'> {/* Card container */}
              <div className='icon mb-20'> {/* Icon container */}
                <img src={servicIcon_03} alt='design' /> {/* Main icon for Web Research */}
                <img className='d-none' src={servicIcon_03} alt='design' /> {/* Hidden alternate icon (same as main) */}
              </div>
              <div className='skill-project'> {/* Service details */}
                <h4 className='mb-3'>Web Research</h4> {/* Service title */}
                <p>46 projects</p> {/* Number of projects */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Area */}
      <div className='counter-area mt-45'> {/* Counter section with top margin */}
        <div className='container'> {/* Bootstrap container */}
          <div className='row'> {/* Bootstrap row */}
            {/* Counter 1: Years of Experience */}
            <SingleCountdown
              extraClass='mb-4 mb-md-0' // Additional classes for styling and margin
              title='Years of Experience' // Counter title
              start={0} // Starting number for the counter
              end={4} // Ending number for the counter
              duration={7} // Duration of the counting animation in seconds
            />
            {/* Counter 2: Students Taught */}
            <SingleCountdown
              extraClass='mb-4 mb-md-0'
              title='Students Taught'
              start={0}
              end={76}
              duration={9}
            />
            {/* Counter 3: Days Coding */}
            <SingleCountdown
              extraClass='mb-4 mb-md-0'
              title='Days Coding'
              start={0}
              end={899}
              duration={7}
            />
            {/* Counter 4: Clients Served */}
            <SingleCountdown
              title='Clients Served' // No extraClass for the last counter
              start={0}
              end={11}
              duration={10}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
