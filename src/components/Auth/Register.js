import styles from './Register.module.scss';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/authSlice';;


export default function CafeMenu() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth);
  console.log(loading,"pppppp");

  const [userState, setUserState] = useState({ 
    email: "",
    username: "",
    password: ""
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
     const userData = {
      email: userState.email, 
      username: userState.username,
      password: userState.password,
    };
    dispatch(registerUser(userData));
    localStorage.setItem('registeredUser', JSON.stringify(userData));
  };
  const inputData = [
    {
      type: "text",
      name: "email",
      placeholder: "Email address",
    },
    {
      type: "text",
      name: "username",
      placeholder: "Username",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
    }
  ]
  const navigateTo = () => {
    navigate("/login");
  }
  return (
    <div className={styles.app}>
      <div className={styles.reg_body}>
        <div className={styles.innner_reg_body}>
          <h1 className={styles.header_title}>P𝐞𝐭𝐬 𝐬h𝐨p </h1>
          <div className={styles.header_img_text}>
            <a>Log in with Facebook</a>
          </div>
          <div className={styles.line}>
            <div className={styles.border}></div>
            <div className={styles.spacer}>
              <h3><span>OR</span></h3>
            </div>
            <div className={styles.border}></div>
          </div>
          <form className={styles.form_body} onSubmit={handleSubmit}>
            {inputData.map((data) =>
              <input
               key={data?.name}
                type={data.type}
                name={data.name}
                placeholder={data.placeholder}
                className={styles.form_control}
                value={userState[data.name]}
                onChange={handleInputChange}
              />
            )}
          
            <button type='submit' className={styles.text_signup}>
              Sign Up
            </button>
          </form>

        </div>

      </div>
      <div className={styles.reg_body_bottom}>
        <div className={styles.footer_body}>
          <span>Have an account ? </span>
          <a href='' onClick={navigateTo}>Log in</a>
        </div>
      </div>
    </div>
  );
}