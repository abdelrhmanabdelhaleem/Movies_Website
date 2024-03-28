import React, { useState } from "react";
import Axios from "axios";
import joi from "joi";

import { useNavigate } from "react-router-dom";

export default function Regester() {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [errorList, setErrorList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "ffff",
    age: 0,
    email: "",
    password: "",
  });

  let getUserData = (e) => {
    const myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  let sendUserData = async () => {
    let { data } = await Axios.post(
      `https://movies-api.routemisr.com/signup`,
      user
    );
    console.log(data);
    if (data.message === "success") {
      navigate("/login");
      setLoading(false);
    } else {
      setLoading(false);
      setError(data.message);
    }
  };

  let submitRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    let validation = validationReg();
    if (validation.error) {
      setErrorList(validation.error.details);
      setLoading(false);
    } else {
      sendUserData();
    }
  };

  let validationReg = () => {
    let scheme = joi.object({
      first_name: joi.string().min(3).max(8).required(),
      last_name: joi.string().min(3).max(8).required(),
      age: joi.number().min(16).max(80).required(),
      email: joi
        .string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required(),
      password: joi
        .string()
        .pattern(/^[A-Z a-z 0-9]{3,8}$/)
        .required(),
    });

    return scheme.validate(user, { abortEarly: false });
  };

  return (
    <div className="w-75 mx-auto py-3 ">
      <h3 className="my-4">Registration form</h3>

      {error ? <p className="text-danger ">{error}</p> : ""}

      <form className="mt-4" onSubmit={submitRegister}>
        <label htmlFor="first_name">name : </label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control myInput mb-2 my-2 "
          name="first_name"
          id="first_name"
        />
        <p className="text-danger">
          {
            errorList.filter((error) => error.context.label === "first_name")[0]
              ?.message
          }
        </p>
        {/* <label htmlFor="last_name ">last_name : </label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control myInput mb-2 my-2 "
          name="last_name"
          id="last_name"
        />
        <p className="text-danger">
          {
            errorList.filter((error) => error.context.label === "last_name")[0]
              ?.message
          }
        </p> */}
        <label htmlFor="age ">age : </label>
        <input
          onChange={getUserData}
          type="number "
          className="form-control myInput mb-2 my-2 "
          name="age"
          id="age"
        />
        <p className="text-danger">
          {
            errorList.filter((error) => error.context.label === "age")[0]
              ?.message
          }
        </p>
        <label htmlFor="email ">email : </label>
        <input
          onChange={getUserData}
          type="email"
          className="form-control myInput mb-2 my-2 "
          name="email"
          id="email"
        />
        <p className="text-danger">
          {
            errorList.filter((error) => error.context.label === "email")[0]
              ?.message
          }
        </p>
        <label htmlFor="password ">password : </label>
        <input
          onChange={getUserData}
          type="password"
          className="form-control myInput mb-2 my-2 "
          name="password"
          id="password"
        />
        <p className="text-danger">
          {
            errorList.filter((error) => error.context.label === "password")[0]
              ?.message
          }
        </p>

        <button type="submit" className="btn btn-info  mb-2 ">
          {loading ? <i className="fas fa-spinner fa-spin"></i> : "Register"}
        </button>
      </form>
    </div>
  );
}
