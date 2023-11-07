import axios from "axios";
import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

function Main() {
  "";
  const navigate = useNavigate();
  //https://dummyjson.com/products/1
  const apiUrl = process.env.REACT_APP_API_URL + "/"; // Assuming this API returns a single product
  console.log(apiUrl);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000);
    const handlePage = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };
    window.removeEventListener("wheel", handlePage);
    return () => {
      clearInterval(interval);
      window.removeEventListener("wheel", handlePage);
    };
  }, []);

  function fetchData() {
    axios
      .get(apiUrl)
      .then((Response) => {
        if (Response.status === 200) {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="animate__animated animate__fadeIn mt-5 ">
      <img
        className={"logo mt-5"}
        src={require("../Assets/img/logo.png")}
        alt=""
      />

      <div className={"loading mt-4"}>
        <ReactLoading className={"loading"} type={"spin"} />
      </div>
      <h1 className={"d-flex justify-content-center mt-5"}>START THE ENGINE</h1>
    </div>
  );
}

export default Main;
