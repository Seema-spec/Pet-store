import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.scss';
import { useNavigate } from 'react-router-dom';
import PetsCustomer from './PetsCustomer';

const ServiceProvide = () => {
  const navigate  =  useNavigate()

  const PetsCustomer = () =>{
    navigate("/petsCustomer")
  }
  const Service = () =>{
    navigate("/service")
  }
    return (
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Dashboard</h1>
            </header>
            <div className={styles.list_container}>
               <div  className={styles.inner_container}>
               <div className={styles.header}>
                With our Pet Care Dashboard, we've transformed the way you manage your pets' needs and access 
                 services. Embrace a new level of efficiency, security, and care as you navigate through "Pets stores" 
                  and " Pet Services." Thank you for choosing us as your partner in providing
                top-notch care for your beloved pets.
                </div>
                <div className={styles.card_block}>
               <div className={styles.card_container}>
                <h1 onClick={PetsCustomer}>Pets Store</h1>
                <p>We understand that every pet is unique and cherished by their owners. That's why we've 
                  created a category designed to store the precious details of your pets
                  and keep them safe in one place. Here, you can register your pets with their names and 
                  breeds, along with your contact information.This platform aims to enhance that connection by creating a personalized space 
                  for them within our pet care community.
                </p>
               </div>
               <div className={styles.card_container}>
                <h1 onClick={Service}>Services</h1>
                <p>Complementing our dedication to pets' well-being, we offer an array of comprehensive services 
                  to ensure your pets are not only loved but also pampered and cared for. Our "Comprehensive 
                  Services" category is a curated collection of the various offerings we provide, ranging from 
                  grooming services like pet showers and nail cutting to specialized medical treatments, 
                  including surgeries and wellness check-ups.Each service is meticulously designed and carried 
                  out by our experienced professionals who prioritize your pets' comfort, safety, and happiness.
                </p>
               </div>
               </div>
            </div>
             </div>
           
           
        </div>
    );
};

export default ServiceProvide;
