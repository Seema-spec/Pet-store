import React from 'react';
import styles from './ServiceProvide.module.scss';
import Data from '../data/ServiceData.json'

const ServiceProvide = () => {

    return (
        <div className={styles.container}>
            <header>
                <div className={styles.header}>
                    <h1>Our Services</h1>
                    <h3>What We Offer</h3>
                </div>
            </header>
            <div className={styles.list_container}>
               {Data?.map((data)=>
               <div  className={styles.inner_container}>
               <img className={styles.img_icon} src={data?.pet_img} alt="" />
               <div className={styles.card_container}>
                   <h2>{data?.Title}</h2>
                   <p>{data?.Description}</p>
                   <div className={styles.button}>Rate : {data?.Rate}</div>
               </div>
             
            </div>
               )} 
             </div>
           
           
        </div>
    );
};

export default ServiceProvide;
