"use client";
import React from "react";
import { useState } from "react";
import styles from "../style/index.module.css";
import useRouter from "next/router";
import authRepository, { LoginBody } from "@/baseRepository/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState<LoginBody>({
    phoneNumber: "",
    password: "",
  });
  const router = useRouter;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    authRepository
      .Login(formData)
      .then((response) => {
        const { token, message } = response.data;

        if (token) {
          if (global?.window !== undefined) {
            localStorage.setItem("access_token", token);
          }
          toast.success("ورود موفقیت آمیز بود !");

          setTimeout(() => {
            router.push("../../dashboard");
          }, 2000);
          return;
        }

        switch (message) {
          case "Phone number and password are required":
            toast.error("شماره موبایل و کلمه عبور الزامی است", {
              autoClose: 4000,
            });
            break;
          case "Invalid phone number or password":
            toast.error("شماره موبایل یا کلمه عبور نادرست است", {
              autoClose: 4000,
            });
            break;
          default:
            toast.error("خطای نامشخص: " + message, { autoClose: 4000 });
            break;
        }
      })
      .catch(() => {
        toast.error("خطا در سرور ! لطفا با پشتیبانی ارتباط بگیرید");
      });
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
          id="phoneNumber"
          placeholder="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label className={styles.txt}>Password</label>
        <input
          className={styles.txt}
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Login;
