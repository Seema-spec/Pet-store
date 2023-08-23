import React from "react";
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';

function Home (){
  const navigate = useNavigate();

  const navigateTo = (path) => {
  
    navigate(path);
  }
    return (
      <div className={styles.container}>
        <header>
       <div className={styles.header}>
       </div>
        </header>
        <div className={styles.inner_container}>
        <div className={styles.left_container}>
        <div className={styles.card}></div>
        <div className={styles.text_block}>
            <div className={styles.text}>
                <p>𝐋𝐨v𝐢𝐧g P𝐞𝐭𝐬 𝐬h𝐨p & S𝐞r𝐯𝐢c𝐞𝐬  </p> 
                <p className={styles.text2}>Pet veterinary shops play a vital role in ensuring the health and happiness of pets. They offer a comprehensive range of services that not only address medical needs but also provide a supportive environment for pets to thrive. By providing a combination of medical expertise, grooming, and wellness services, these shops contribute significantly to the quality of life of pets and strengthen the bond between pets and their owners.</p>
            </div>
            <button className={styles.button}  onClick={() => navigateTo("/login")}>Login</button>
            <button className={styles.button2}  onClick={() => navigateTo("/register")}>Register</button>
        </div>
       </div>
       
       </div>
       <footer>
       <div className={styles.header}>
       </div>
        </footer>
      </div>
    );
  }

  export default Home;