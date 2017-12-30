
import React from 'react';
import './Amenity.css';
import {
  MdAccessible
} from 'react-icons/lib/md';

const amenity = {
 heat: false,
 air_conditioning: false,
 washer: true,
 dryer: false,
 drawers: true,
 bikes: true,
 wifi: false,
 computer: false,
 phone: true,
 tv: false,
 transportation: false,
 pet_friendly: false,
 family_friendly: true,
 baby_friendly: false,
 toddler_friendly: false,
 child_friendly: true,
 teen_friendly: false,
 elderly_friendly: false
};

export default (props) => (
  <div className='amenity'>
    <h3 className='accent-color'>AMENITY</h3>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.heat ? 1 : 0.4,
          color: props.heat ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Heat</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.air_conditioning ? 1 : 0.4,
          color: props.air_conditioning ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Air conditioning</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.washer ? 1 : 0.4,
          color: props.washer ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Washer</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.dryer ? 1 : 0.4,
          color: props.dryer ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Dryer</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.drawers ? 1 : 0.4,
          color: props.drawers ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Drawers</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.bikes ? 1 : 0.4,
          color: props.bikes ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Bikes</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.wifi ? 1 : 0.4,
          color: props.wifi ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Wifi</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.computer ? 1 : 0.4,
          color: props.computer ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Computer</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.phone ? 1 : 0.4,
          color: props.phone ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Phone</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.tv ? 1 : 0.4,
          color: props.tv ? '#74D5B9' : '#ddd'
        }}
      />
      <div>TV</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.transportation ? 1 : 0.4,
          color: props.transportation ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Transportation</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.pet_friendly ? 1 : 0.4,
          color: props.pet_friendly ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Pet friendly</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.family_friendly ? 1 : 0.4,
          color: props.family_friendly ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Family friendly</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.baby_friendly ? 1 : 0.4,
          color: props.baby_friendly ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Baby friendly</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.toddler_friendly ? 1 : 0.4,
          color: props.toddler_friendly ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Toddler friendly</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.teen_friendly ? 1 : 0.4,
          color: props.teen_friendly ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Teen friendly</div>
    </section>
    <section className='amenity-icon-container'>
      <MdAccessible
        size={40}
        className='amenity-icon'
        style={{
          opacity: props.elderly_friendly ? 1 : 0.4,
          color: props.elderly_friendly ? '#74D5B9' : '#ddd'
        }}
      />
      <div>Elderly friendly</div>
    </section>
  </div>
);
