import React, { useState } from 'react';
import axios from 'axios';


function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/api/forgotpassword", { email },)
    .then((response) => {
      alert("Email sent")
        console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#111',
    },
    formContainer: {
      width: '300px',
      padding: '20px',
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      backgroundColor: '#222',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '15px',
    },
    label: {
      color: '#fff',
      marginTop: '10px',
      marginBottom: '5px',
      fontSize: '18px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      backgroundColor: '#333',
      color: '#fff',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={{fontSize:30}}>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={styles.input}
            />
          </div>
          <button style={styles.button} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;