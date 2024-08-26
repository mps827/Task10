"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth-slice";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import user from "@/baseRepository/user";
import { ClipLoader } from "react-spinners";
import BaseListTile from "@/component/baseList";

const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth/login"); // هدایت به صفحه ورود پس از خروج
  };

  const token = localStorage.getItem("access_token");
  const [UsersList, setUsersList] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchUsers = async () => {
    setisLoading(true);
    const users = (await user.getUsers()).data;
    setUsersList(users);
    setisLoading(false);
  };

  useEffect(() => {
    if (token) fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.txt}>Welcome to your Dashboard!</h1>
      <p className={styles.txt}>You have successfully logged in.</p>
      <button className={styles.btn} onClick={handleLogout}>
        Logout
      </button>

      <div>
        {isLoading ? (
          <div>
            <ClipLoader
              color={"#0097e6"}
              loading={isLoading}
              size={16}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            در حال لود لیست کاربران
          </div>
        ) : UsersList.length > 0 ? (
          <div className={styles.txt}>لیست کاربران</div>
        ) : (
          <div className={styles.txt}>There is no user!</div>
        )}
        {/* </div> */}
        {UsersList.length > 0
          ? UsersList.map((item) => {
              return (
                <div className={styles.box}>
                  <BaseListTile
                    name={item["name"]}
                    family={item["family"]}
                    phoneNumber={item["phoneNumber"]}
                  />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Dashboard;
