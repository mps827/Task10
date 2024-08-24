"use client";
import React from "react";
import { useState } from "react";
import styles from "../style/index.module.css";
import useRouter from "next/router";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    const storedPassword = localStorage.getItem("password");

    if (storedPhoneNumber === phoneNumber && storedPassword === password) {
      // هدایت به صفحه داشبورد در صورت موفقیت
      router.push("/dashboard");
    } else {
      alert("Invalid phone number or password.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.txt}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.txt}>Phone Number</label>
        <input
          className={styles.txt}
          type="number"
          name="phoneNumber"
          placeholder="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          required
        />

        <label className={styles.txt}>Password</label>
        <input
          className={styles.txt}
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
          required
        />

        <label className={styles.txt}>Confirm Password</label>
        <input
          className={styles.txt}
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Login;
