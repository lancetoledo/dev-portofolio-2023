//src/Components/portfolios.jsx

import React, { useState, useEffect } from 'react' // Import React and hooks for state and lifecycle management
import { Col, Row, Nav, Tab } from 'react-bootstrap' // Import Bootstrap components for layout and navigation
import Masonry from 'react-responsive-masonry' // Import Masonry for responsive grid layout
import SinglePortfolio from '../SingleFeatures/SinglePortfolio' // Import custom SinglePortfolio component
import portfolioImg_01 from '../assets/images/portfolio/1.png' // Import portfolio images
import portfolioImg_02 from '../assets/images/portfolio/2.png'
import portfolioImg_03 from '../assets/images/portfolio/3.png'
import portfolioImg_04 from '../assets/images/portfolio/4.png'
import portfolioImg_05 from '../assets/images/portfolio/5.png'
import portfolioImg_06 from '../assets/images/portfolio/6.png'
import portfolioImg_07 from '../assets/images/portfolio/7.png'
import portfolioImg_08 from '../assets/images/portfolio/8.png'
import portfolioImg_09 from '../assets/images/portfolio/9.png'
import { SRLWrapper } from 'simple-react-lightbox' // Import SRLWrapper for lightbox functionality
import SectionTitle from './section_title' // Import custom SectionTitle component

// Extract YouTube video data
export const youtubeVideos = [
    {
      id: 'JbZPQJpfahI',
      url: 'https://youtu.be/JbZPQJpfahI?si=Yc19F-TWO3vmWB5J&t=75',
      title: 'Spotify Blockchain Tutorial',
      views: 155400,
      likes: 1900,
      comments: 87,
      thumbnailImg: portfolioImg_04,
    },
    {
      id: 'lI1ae4REbFM',
      url: 'https://youtu.be/lI1ae4REbFM?si=P7hdW2A_yfa5p1Ok&t=36936',
      title: 'JavaScript Beginners Tutorial 12 Hours',
      views: 1212000,
      likes: 42917,
      comments: 1689,
      thumbnailImg: portfolioImg_03,
    },
    {
      id: 'lI1ae4REbFM',
      url: 'https://youtu.be/8jRB-2AQ-mI?si=aK8Q2S2EBEFhxrug&t=49',
      title: 'I asked developers how much MONEY they make',
      views: 1373398,
      likes: 23917,
      comments: 1264,
      thumbnailImg: portfolioImg_02,
    },
    {
      id: 'JbZPQJpfahI',
      url: 'https://youtu.be/HMdwbq1JJT0?si=IR1t773t6LcELmKA&t=131',
      title: 'Amazon Web 3.0 with Solidity',
      views: 109000,
      likes: 2900,
      comments: 163,
      thumbnailImg: portfolioImg_03,
    },
    {
    id: 'qIGs3XWybgU',
    url: 'https://youtu.be/qIGs3XWybgU?si=SPVz3RZpI6_vtee_&t=106',
    title: 'Tiktok Blockchain Tutorial',
    views: 106000,
    likes: 1800,
    comments: 81,
    thumbnailImg: portfolioImg_04,
  },
  {
    id: 'HIWuUdo9utw',
    url: 'https://www.youtube.com/watch?v=HIWuUdo9utw',
    title: 'Airbnb Blockchain Tutorial',
    views: 17000,
    likes: 419,
    comments: 22,
    thumbnailImg: portfolioImg_03,
  },
  {
    id: 'XQCmAzVINRA',
    url: 'https://www.youtube.com/watch?v=XQCmAzVINRA',
    title: 'Instagram Blockchain Tutorial',
    views: 12000,
    likes: 317,
    comments: 24,
    thumbnailImg: portfolioImg_02,
  },
];

export default function Portfolios() { // Define the Portfolios functional component
  const [windowWidth, setWindowWidth] = useState(window.innerWidth) // State to track window width
  const [portfolioColumns, setPortfolioColumns] = useState(3) // State to track number of columns in portfolio grid

  // Function to control the number of columns based on window width
  const controlColumns = () => {
    setWindowWidth(window.innerWidth) // Update window width state

    if (windowWidth >= 992) { // If window width is large (desktop)
      setPortfolioColumns(3) // Set 3 columns
    } else if (windowWidth <= 991 && windowWidth > 767) { // If window width is medium (tablet)
      setPortfolioColumns(3) // Set 3 columns
    }
    if (windowWidth <= 767) { // If window width is small (mobile)
      setPortfolioColumns(1) // Set 1 column
    }
  }

  window.addEventListener('resize', controlColumns) // Add event listener for window resize

  useEffect(() => { // useEffect hook to handle side effects
    controlColumns() // Call controlColumns on component mount and when windowWidth changes
  }, [windowWidth]) // Dependency array includes windowWidth

  return ( // Render the component UI
    <>
      <div className='portfolio-area section-ptb-2' id='portfolio'> {/* Portfolio section container */}
        <div className='container'> {/* Bootstrap container for responsive padding */}
          <SectionTitle
            title='PORTFOLIO' // Section title
            subTitle='My Masterpiece Collection' // Section subtitle
            desc='Welcome to my project section, where you can find a selection of my past and current software development projects. I am passionate about creating high-quality, innovative solutions for a variety of industries and am always looking for new challenges to tackle.' // Section description
          />
          <Tab.Container defaultActiveKey='all'> {/* Tab container with default active tab 'all' */}
            <Row> {/* Bootstrap row for layout */}
              <div className='col-xl-8 col-lg-9 col-sm-12 mx-auto'> {/* Centered column for navigation */}
                <Nav className='pofo-cat pb-5 text-center justify-content-center'> {/* Navigation for portfolio categories */}
                  <Nav.Item>
                    <Nav.Link eventKey='all'>ALL</Nav.Link> {/* Tab for all portfolio items */}
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='web_development'>
                      WEB DEVELOPMENT
                    </Nav.Link> {/* Tab for Web Development category */}
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='marketing'>YOUTUBE</Nav.Link> {/* Tab for Marketing category */}
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='ux_ui'>UI / UX</Nav.Link> {/* Tab for UI/UX category */}
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='web_research'>WEB RESEARCH</Nav.Link> {/* Tab for Web Research category */}
                  </Nav.Item>
                  <div className='pofo-line'></div> {/* Decorative line under navigation */}
                </Nav>
              </div>
              <Col sm={12}> {/* Full-width column for tab content */}
                <Tab.Content> {/* Container for tab panes */}
                  <Tab.Pane eventKey='all'> {/* Tab pane for 'all' category */}
                    <SRLWrapper> {/* Lightbox wrapper */}
                      <Masonry columnsCount={portfolioColumns}> {/* Masonry grid with dynamic columns */}
                        {/* SinglePortfolio components for each portfolio item */}
                        <SinglePortfolio
                          portfolioImg={portfolioImg_01}
                          portfolioLink={"https://autholics.netlify.app/"}
                          title='Autoholics'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_09}
                          portfolioLink={"https://nbagoatcalculator.netlify.app/"}
                          title='NBA G.O.A.T Calculator'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_07}
                          portfolioLink={"https://aiartgenetor.netlify.app/"}
                          title='AI Art Generator'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_08}
                          portfolioLink={"https://discordchatbot.netlify.app/"}
                          title='Discord Chatbot'
                        />   
                        <SinglePortfolio
                          portfolioImg={portfolioImg_03}
                          portfolioLink={"https://www.youtube.com/watch?v=HIWuUdo9utw"}
                          title='Airbnb Blockchain Tutorial'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_04}
                          portfolioLink={"https://youtu.be/qIGs3XWybgU?si=SPVz3RZpI6_vtee_&t=106"}
                          title='Tiktok Blockchain Tutorial'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_02}
                          portfolioLink={"https://www.youtube.com/watch?v=XQCmAzVINRA"}
                          title='Instagram Blockchain Tutorial'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_06}
                          portfolioLink={"https://nba-compare-stats.netlify.app/"}
                          title='NBA Player Stats Comparison'
                        />
                      </Masonry>
                    </SRLWrapper>
                  </Tab.Pane>
                  <Tab.Pane eventKey='ux_ui'> {/* Tab pane for 'UI / UX' category */}
                    <SRLWrapper>
                      <Masonry columnsCount={portfolioColumns}>
                        <SinglePortfolio
                          portfolioImg={portfolioImg_03}
                          title='Portfolio Title Six'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_01}
                          title='Portfolio Title Seven'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_04}
                          title='Portfolio Title Eight'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_05}
                          title='Portfolio Title Nine'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_06}
                          title='Portfolio Title Ten'
                        />
                      </Masonry>
                    </SRLWrapper>
                  </Tab.Pane>
                  <Tab.Pane eventKey='web_development'> {/* Tab pane for 'Web Development' category */}
                    <SRLWrapper>
                      <Masonry columnsCount={portfolioColumns}>
                        <SinglePortfolio
                          portfolioImg={portfolioImg_09}
                          portfolioLink={"https://nbagoatcalculator.netlify.app/"}
                          title='NBA G.O.A.T Calculator'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_01}
                          portfolioLink={"https://autholics.netlify.app/"}
                          title='Autoholics'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_07}
                          portfolioLink={"https://aiartgenetor.netlify.app/"}
                          title='AI Art Generator'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_08}
                          portfolioLink={"https://discordchatbot.netlify.app/"}
                          title='Discord Chatbot'
                        />                          
                        <SinglePortfolio
                          portfolioImg={portfolioImg_06}
                          portfolioLink={"https://nba-compare-stats.netlify.app/"}
                          title='NBA Player Stats Comparison'
                        />                        
                      </Masonry>
                    </SRLWrapper>
                  </Tab.Pane>
                  <Tab.Pane eventKey='web_research'> {/* Tab pane for 'Web Research' category */}
                    <SRLWrapper>
                      <Masonry columnsCount={portfolioColumns}>
                        <SinglePortfolio
                          portfolioImg={portfolioImg_01}
                          title='Portfolio Title One'
                        />
                      </Masonry>
                    </SRLWrapper>
                  </Tab.Pane>
                  <Tab.Pane eventKey='marketing'> {/* Tab pane for 'YouTube' category */}
                    <SRLWrapper>
                      <Masonry columnsCount={portfolioColumns}>
                      <SinglePortfolio
                          portfolioImg={portfolioImg_03}
                          portfolioLink={"https://www.youtube.com/watch?v=HIWuUdo9utw"}
                          title='Airbnb Blockchain Tutorial'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_02}
                          portfolioLink={"https://www.youtube.com/watch?v=XQCmAzVINRA"}
                          title='Instagram Blockchain Tutorial'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_04}
                          portfolioLink={"https://youtu.be/qIGs3XWybgU?si=SPVz3RZpI6_vtee_&t=106"}
                          title='Tiktok Blockchain Tutorial'
                        />
                        <SinglePortfolio
                          portfolioImg={portfolioImg_04}
                          portfolioLink={"https://youtu.be/qIGs3XWybgU?si=SPVz3RZpI6_vtee_&t=106"}
                          title='Tiktok Blockchain Tutorial'
                        />
                        
                      </Masonry>
                    </SRLWrapper>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>
  )
}
