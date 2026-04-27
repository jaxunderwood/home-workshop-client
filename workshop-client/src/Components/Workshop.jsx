import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from '../styles/App.module.css';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock, faToolbox} from '@fortawesome/free-solid-svg-icons';






export default function Workshop() {
  const [value, setValue] = useState(new Date());

   function onChange(nextValue) {
    setValue(nextValue);
  }



  return (
        <div>
      <section className={styles.calendar}>
    <h1>Events this week</h1>
    <div className={styles.events}>

<div className={styles.calendarContainer}>
      <Calendar onChange={onChange} value={value} />
</div>




    <input className={styles.search} id="zip" name="zip" type="text" inputMode="numeric" placeholder="Zip Code" />
    </div>
    </section>
<section className={styles.workshopResults}>
    <div>
     <div className={styles.event}>
        <h2>Date <span className={styles.eventDay}>day</span> <span className={styles.numEvents}>5 events</span></h2>
       <ul className={styles.eventSpecs}>
            <li className={styles.eventTime}>
                <FontAwesomeIcon icon={faClock} />
                time</li>
            <li className={styles.eventName}>
                <FontAwesomeIcon icon={faToolbox} />
                 event name</li>
            <li className={styles.eventDetails}>event details</li>
            <li className={styles.eventDetails}>virtual or in-person (address for in-person)</li>
            <li className={styles.eventName}>link to signup for event</li>
        </ul>
     </div>
    <div className={styles.event}>
        <h2>Date <span className={styles.eventDay}>day</span> <span className={styles.numEvents}>5 events</span></h2>
        <ul className={styles.eventSpecs}>
            <li className={styles.eventTime}>
                <FontAwesomeIcon icon={faClock} /> time</li>
            <li className={styles.eventName}>
                <FontAwesomeIcon icon={faToolbox} /> event name</li>
            <li className={styles.eventDetails}>event details</li>
            <li className={styles.eventDetails}>virtual or in-person (address for in-person)</li>
            <li className={styles.eventName}>link to signup for event</li>
        </ul>
    </div>
    <div className={styles.event}>
        <h2>Date <span className="eventDay">day</span> <span className={styles.numEvents}>5 events</span></h2>
        <ul className={styles.eventSpecs}>
            <li className={styles.eventTime}>
                <FontAwesomeIcon icon={faClock} /> time</li>
            <li className={styles.eventName}>                <FontAwesomeIcon icon={faToolbox} />
 event name</li>
            <li className={styles.eventDetails}>event details</li>
            <li className={styles.eventDetails}>virtual or in-person (address for in-person)</li>
            <li className={styles.eventName}>link to signup for event</li>
        </ul>
    </div>
    </div>
</section>
        </div>
    );
}
