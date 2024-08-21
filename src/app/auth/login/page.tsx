"use client";
import React from "react";
import styles from "../style/index.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.txt}>Login</h1>
      <form className={styles.form}>
        <label className={styles.txt}>Phone Number</label>
        <input className={styles.txt} type="text" name="phoneNumber" required />

        <label className={styles.txt}>Password</label>
        <input
          className={styles.txt}
          type="password"
          name="password"
          required
        />

        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Login;
