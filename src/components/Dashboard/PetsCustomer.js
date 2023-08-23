import React, { useState, useEffect } from 'react';
import styles from './PetsCustomer.module.scss';
import Data from '../data/Data.json'

const moviesPerPage = 10;

const PetsCustomer = () => {
  return (
    <div className={styles.container}>
        <header>
       <div className={styles.header}>
        <h1>Customer Pets</h1>
       </div>
        </header>
    
     <div className={styles.list_container} >
     {Data?.map((data)=> <div className={styles.card_container}>
       <div className={styles.inner_card}>
         <img
           className={styles.img_icon}
           src={data?.pet_img}
           alt=""
         />
       </div>
       <div className={styles.inner_card_text}>
         <div className={styles.card_text}>{data?.full_name}</div>
         <div className={styles.card_text}>{data?.id}</div>
       </div>
       <div className={styles.card_text_desc}>{data.email}</div>
     </div>
     )}
 </div> 
    </div>
  );
};

export default PetsCustomer;
