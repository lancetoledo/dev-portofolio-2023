import React from 'react'
import {
  FaEnvelope,
  FaPhone,
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaCalendarPlus,
} from 'react-icons/fa'
import SectionTitle from './section_title'

export default function Contact() {
  return (
    <div className='contact-area section-ptb' id='contact'>
      <div className='container'>
        <SectionTitle
          title='CONTACT US'
          subTitle='Ways To Contact Me'
          desc='👇 Here you can find my socials and ways to contact me. You can also book a call if you would like to connect or do some coding with me!'
        />
      </div>
      <div className='container mt-45'>
        <div className='row md-justify-content-center'>
          <div className='col-lg-4 col-md-6 mb-30'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaEnvelope />
                </i>
              </div>
              <a
                className='btn-animation'
                href='mailto:lanceatoledo@gmail.com'
              >
                lanceatoledo@gmail.com
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaPhone />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://www.cleverprogrammer.com/'
              >
                +1 (908) 342 XXXX
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaGithub />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://github.com/lancetoledo'
              >
                lancetoledo
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30 mb-lg-0'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaYoutube />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://www.youtube.com/@CleverProgrammer'
              >
                Clever Programmer
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30 mb-lg-0'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaTwitter />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://twitter.com/ohitsjustlawnce'
              >
                @ohitsjustlawnce
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 mb-30 mb-lg-0'>
            <div className='contact-item'>
              <div className='ct-item-icon float-left ml-30 mr-20'>
                <i>
                  <FaCalendarPlus />
                </i>
              </div>
              <a
                className='btn-animation'
                href='https://calendly.com/lance-toledo/60min'
              >
                Book A Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
