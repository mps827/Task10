"use client";

import React from "react";
import Link from "next/link";
import styles from "../style/index.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import authRepository, { SignupBody } from "@/baseRepository/auth";
import { toast } from "react-toastify";

const Signup: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<SignupBody>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    nationalCode: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.lastName ||
      !formData.firstName ||
      !formData.nationalCode ||
      !formData.password ||
      !formData.phoneNumber ||
      !formData.confirmPassword
    ) {
      toast.error("یک یا چند فیلد خالی است");
      return;
    }

    authRepository
      .Signup(formData)
      .then((res) => {
        const message = res.data.message;

        switch (message) {
          case "User created successfully":
            toast.success(
              "ثبت نام با موفقیت انجام شد! به صفحه منتقل می شوید.",
              {
                autoClose: 3500,
              }
            );
            setTimeout(() => {
              router.push("/login");
            }, 3000);
            break;

          case "User with this phone number, national code, or email address already exists":
            toast.error(
              "حساب کاربری با این شماره موبایل ، کد ملی یا ایمیل از قبل وجود دارد !",
              {
                autoClose: 5000,
              }
            );
            break;

          case "National code must be a 10-digit number":
            toast.error("فرمت کد ملی نادرست است !", { autoClose: 4000 });
            break;

          case "Phone number must be an 11-digit number starting with 09":
            toast.error(
              "فرمت شماره تلفن غلط است.\n شماره تلفن باید یک عدد ۱۱ رقمی و شروع آن با ۰۹ باشد"
            );
            break;

          case "All fields are required":
            toast.error("وارد کردن تمام فیلد ها اجباری است");
            break;

          default:
            toast.error("خطای ناشناخته رخ داده است.");
            break;
        }
      })
      .catch((error) => {
        toast.error("ثبت نام با خطا مواجه شد. لطفا دوباره تلاش کنید.");
      });

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return; // جلوگیری از ادامه فرآیند اگر رمزها یکسان نباشند
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.txtHeader}>SignUp</h1>
      <form className={styles.form} onSubmit={registerHandler}>
        <label className={styles.txt}>First Name</label>
        <input
          className={styles.txt}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label className={styles.txt}>Last Name</label>
        <input
          className={styles.txt}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label className={styles.txt}>National code</label>
        <input
          className={styles.txt}
          type="number"
          name="nationalCode"
          id="nationalCode"
          placeholder="nationalCode"
          value={formData.nationalCode}
          onChange={handleChange}
          required
        />

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

        <label className={styles.txt}>Email</label>
        <input
          className={styles.txt}
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={formData.email}
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

        <label className={styles.txt}>Confirm Password</label>
        <input
          className={styles.txt}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
      <p>
        Already Registred? <Link href="/auth/login"> Login</Link>
      </p>
    </div>
  );
};

export default Signup;

// authRepository.Signup().then((response) => {
//   const message = response.data.message;
// });
