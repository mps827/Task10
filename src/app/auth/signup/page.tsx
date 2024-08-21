"use client";
import React from "react";
import Link from "next/link";
import styles from "../style/index.module.css";
import { useState } from "react";
import baseRepository from "@/baseRepository/base";

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async (event: any) => {
    event.preventDefault();

    const res = await baseRepository.post("./signup", {
      phoneNumber,
      password,
    });
    console.log(res);

    if (res.status == 200) {
      alert("successful Registered");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.txtHeader}>SignUp</h1>
      <form className={styles.form}>
        <label className={styles.txt}>First Name</label>
        <input
          className={styles.txt}
          type="text"
          name="firstName"
          placeholder="firstName"
          required
        />

        <label className={styles.txt}>Last Name</label>
        <input
          className={styles.txt}
          type="text"
          name="lastName"
          placeholder="lastName"
          required
        />

        <label className={styles.txt}>National code</label>
        <input
          className={styles.txt}
          type="text"
          name="nationalCode"
          placeholder="nationalCode"
          required
        />

        <label className={styles.txt}>Phone Number</label>
        <input
          className={styles.txt}
          type="text"
          name="phoneNumber"
          placeholder="phoneNumber"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />

        <label className={styles.txt}>Email</label>
        <input
          className={styles.txt}
          type="email"
          name="email"
          placeholder="email"
          required
        />

        <label className={styles.txt}>Password</label>
        <input
          className={styles.txt}
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit" onClick={registerHandler}>
          Register
        </button>
      </form>
      <p>
        Already Registred? <Link href="/auth/login"> Login</Link>
      </p>
    </div>
  );
};

export default Signup;
