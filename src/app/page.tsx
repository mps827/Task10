"use client";
// require("dotenv").config();
import Link from "next/link";
import styles from "./Styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hi! Welcome</h1>
      <div>
        <div>
          <Link className={styles.btn} href={"/auth/login"}>
            Login
          </Link>
        </div>
        <div>
          <Link className={styles.btn} href={"/auth/signup"}>
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
}
