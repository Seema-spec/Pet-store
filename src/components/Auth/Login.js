import React,{useState} from "react";
import cn from 'classnames';
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { useSelector} from 'react-redux';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const storedCredentials = JSON.parse(localStorage.getItem('registeredUser'));
  
  const handleClick = async () => {
    try {
      if (email === storedCredentials.email && password === storedCredentials.password) {
        navigate('/dashboard');
      } else {
        console.error('Login failed', 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  }
  
  const signup = () =>{
    navigate("/register")
  }
  return (
    <div className={styles.login_container}>
      <div className={styles.login_conntent}>
        <div className={styles.login_header}>
          <h1>P𝐞𝐭𝐬 𝐬h𝐨p </h1>
        </div>
        <div className={styles.login_btn_filed}>
         <input
        type="email"
        placeholder="Enter your email"
        value={email}
        className={styles.btn_login}
        onChange={(e) => setEmail(e.target.value)}
      />
       <input
        type="password"
        placeholder="Enter your password"
        value={password}
        className={styles.btn_login}
        onChange={(e) => setPassword(e.target.value)}
      />
          <button className={cn(styles.btn_login, styles.submit_btn)}  onClick={handleClick}>Login</button>
        </div>
        <div className={styles.spacer}>
          <h2>
            <span>OR</span>
          </h2>
        </div>

        <div className={styles.login_footer}>
          <div className={styles.footer_img_content}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWLeNoTam87NlqMhl31j5EQEMP2FkbSRcNIw&usqp=CAU"
              alt="FB"
            ></img>
            <a>Log in with Facebook</a>
          </div>

          <a href="">Forgot password?</a>
        </div>
      </div>

      <div className={styles.login_msg}>
        <span>Don't have an account?</span>
        <button onClick={signup} >Sign up</button>
      </div>
    </div>
  );
}

export default Login;