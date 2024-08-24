"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth-slice";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login"); // هدایت به صفحه ورود پس از خروج
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.txt}>Welcome to your Dashboard!</h1>
      <p className={styles.txt}>You have successfully logged in.</p>
      <button className={styles.btn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
