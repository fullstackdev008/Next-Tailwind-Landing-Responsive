import React from 'react'
import Image from 'next/image'
import InputGroup from '../../commons/InputGroup'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import googleMapStyles from '../../commons/GoogleMapData.json'

const center = {
  lat: 40.5168,
  lng: -1.7058,
}

export default function Contact({viewport}) {
  const containerStyle = {
    width: '100%',
    height: viewport === 'desktop' ? '833px' : '73px',
  }
  return (
    <React.Fragment>
      {viewport === 'desktop' ? (
        <div className={`w-full flex flex-wrap contact-content`}>
          <div className={'w-2/5 map-content'}>
            <LoadScript googleMapsApiKey='AIzaSyCrqp_iYoLmO8ZVhAk6zKe8Ew5fDCYnPAU'>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12.5}
                options={{
                  fullscreenControl: false,
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  styles: googleMapStyles,
                }}
              >
              </GoogleMap>
            </LoadScript>
            <div className={'w-full map-overlay'}></div>
            <div className={'w-full location-content'}>
              <p className={'title-header'}>Our Contact Details</p>
              <p className={'sub-title-header'}>Come Here To Meet Our Experts</p>
              <div className={'w-full flex flex-wrap'}>
                <div className={'place-icon-content'}>
                  <div className={'w-full flex flex-wrap place-icon'}>
                    <Image
                      src={'/images/place.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
              </div>
              <p className={'contact-title'}>Location</p>
              <p className={'contact-sub-title'}>Madrid, Spain</p>
              <div className={'w-full flex flex-wrap'}>
                <div className={'w-full phone-icon-content'}>
                  <div className={'w-full flex flex-wrap phone-icon'}>
                    <Image
                      src={'/images/phone.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
              </div>
              <p className={'contact-title'}>Phone</p>
              <p className={'contact-sub-title'}>+(00) 236558 9977 </p>
              <div className={'w-full flex flex-wrap'}>
                <div className={'envelope-icon-content'}>
                  <div className={'w-full flex flex-wrap envelope-icon'}>
                    <Image
                      src={'/images/envelope.png'}
                      layout={'fill'}
                    />
                  </div>
                </div>
              </div>
              <p className={'contact-title'}>Support</p>
              <p className={'contact-sub-title'}>Support@playbak.Com</p>
            </div>
          </div>
          <div className={'w-3/5 form-content'}>
            <p className={'contact-title'}>Get In Touch With Us</p>
            <p className={'contact-sub'}>We Are Always Here To Help Your Business</p>
            <div className={'w-full flex flex-wrap contact-form-content'}>
              <InputGroup placeholder={'Input name'} textType={'text'}/>
              <InputGroup placeholder={'Input email'} textType={'email'}/>
              <InputGroup placeholder={'Input subject'} textType={'text'}/>
              <InputGroup placeholder={'Input description'} textType={'text'}/>
              <button className={'btn-contact'}>Contact Now</button>
            </div>
            <div className={'contact-img-content'}>
              <div className={'w-full flex flex-wrap contact-img'}>
                <Image
                  src={'/images/contact.png'}
                  layout={'fill'}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`w-full flex flex-wrap contact-content`}>
          <div className={'w-full flex flex-wrap form-content'}>
            <div className={'contact-img-content'}>
              <div className={'w-full flex flex-wrap contact-img'}>
                <Image
                  src={'/images/contact.png'}
                  layout={'fill'}
                />
              </div>
            </div>
            <p className={'contact-title'}>Get In Touch With Us</p>
            <p className={'contact-sub'}>We Are Always Here To Help Your Business</p>
            <div className={'w-full flex flex-wrap contact-form-content'}>
              <InputGroup placeholder={'Input name'} textType={'text'}/>
              <InputGroup placeholder={'Input email'} textType={'email'}/>
              <InputGroup placeholder={'Input subject'} textType={'text'}/>
              <InputGroup placeholder={'Input description'} textType={'text'}/>
              <button className={'btn-contact'}>Contact Now</button>
            </div>
          </div>
          <div className={'w-full flex flex-wrap map-content'}>
            <LoadScript googleMapsApiKey='AIzaSyCrqp_iYoLmO8ZVhAk6zKe8Ew5fDCYnPAU'>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10.5}
                options={{
                  fullscreenControl: false,
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  styles: googleMapStyles,
                }}
              >
              </GoogleMap>
            </LoadScript>
            <div className={'w-full contact-info-content'}>
              <div className={'w-full flex flex-wrap grid grid-cols-3 gap-4'}>

                <div className={'w-full flex flex-wrap justify-center place-icon-content'}>
                  <div className={'w-full flex flex-wrap place-icon'}>
                    <Image
                      src={'/images/mobile-place.png'}
                      layout={'fill'}
                    />
                  </div>
                  <p className="w-full flex flex-wrap justify-center">Location</p>
                </div>

                <div className={'w-full flex flex-wrap justify-center phone-icon-content'}>
                  <div className={'w-full flex flex-wrap phone-icon'}>
                    <Image
                      src={'/images/mobile-phone.png'}
                      layout={'fill'}
                    />
                  </div>
                  <p className="w-full flex flex-wrap justify-center">Phone</p>
                </div>

                <div className={'w-full flex flex-wrap justify-center envelope-icon-content'}>
                  <div className={'w-full flex flex-wrap envelope-icon'}>
                    <Image
                      src={'/images/mobile-envelope.png'}
                      layout={'fill'}
                    />
                  </div>
                  <p className="w-full flex flex-wrap justify-center">Support</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}