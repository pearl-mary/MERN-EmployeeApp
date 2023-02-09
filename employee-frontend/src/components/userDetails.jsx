import React, { Component, useEffect, useState } from "react";
import ViewAllEmployees from "./admin/ViewAllEmployees";
import ViewOnly from "./user/ViewOnly";


const UserDetails = () => {

    const [userData, setUserData] = useState("");
    const [admin, setAdmin] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3005/api/userData')
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        if (data.data.userType == "Admin") {
          setAdmin(true);
        }

        setUserData(data.data);

        if (data.data == "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./login";
        }
      });
  }, []);

  return admin ? <ViewAllEmployees /> : <ViewOnly userData={userData} />;
  
}

export default UserDetails