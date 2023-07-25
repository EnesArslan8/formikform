import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginShema } from "../Shemas/Login";

function Login() {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: loginShema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="login">
      <div className="container">
        <div className="left-side">
          <h1>Login</h1>
          <p>
            By logging in you agree to the ridiculously long terms that you
            didn't bother to read
          </p>
        </div>
        <div className="right-side">
          <form>
            <div className="inputArea">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                className={errors.firstName? 'input-error':""}
              />
              {errors.email && <p className="error">{errors.email}</p>} 
            </div>
            <div className="inputArea">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                value={values.password}
                className={errors.firstName? 'input-error':""}
              />
              {errors.password && <p className="error">{errors.password}</p>} 
            </div>
            <button className="logBtn">Log in</button>
          </form>
          <p onClick={()=>navigate("/")}>Hesabınız yok mu?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
