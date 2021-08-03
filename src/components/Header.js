import React, { useEffect, useState } from "react";
import logo from "../assets/images/sporty.png";
import "./Header.css";
import Button from "./Button";

const Header = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "https://api.github.com/users/hacktivist123/repos";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("This is your data", data);
      });
  }, []);
  const getData = data.map((myList) => <li>{myList.name}</li>);

  return (
    <>
      <div className="header">
        <div className="firstCol">
          <img src={logo} />
        </div>
        <div className="secondCol">
          <Button title="Manage Facility" color="blue" />
          <Button title="Login" color="green" />
        </div>
      </div>
      {getData}
    </>
  );
};
export default Header;
