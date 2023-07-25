import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerShema } from "../Shemas/Register";

function Register() {
  const navigate = useNavigate();
  const {values,errors,handleChange,handleSubmit} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password:"",
      confirmPassword:""
    },
    validationSchema :registerShema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <div className="App">
        <div className="left-side">
          <div className="left-side-container">
            <h1>Let's Talk!</h1>
            <p>
              Drop us a line, we'd love to hear from you. To learn more about us
              <span> visit our webpage.</span>
            </p>
            <img src="https://static.wixstatic.com/media/e4f166_8c2acfebe861448786a671286c071022~mv2.png/v1/crop/x_473,y_383,w_988,h_1056/fill/w_430,h_456,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/coffee.png"></img>
          </div>
        </div>
        <div className="right-side">
          <div className="right-side-container">
            <form onSubmit={handleSubmit}>
              <h4 className="formTitle">Fill in Your Details</h4>
              <div className="details">
                <label className="form" htmlFor="firstName">
                  First Name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  value={values.firstName}
                  className={errors.firstName? 'input-error':""}
                />
                {errors.firstName && <p className="error">{errors.firstName}</p>} 
              </div>
              <div className="details">
                <label className="form" htmlFor="lastName">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  value={values.lastName}
                  className={errors.lastName? 'input-error':""}
                />
                {errors.firstName && <p className="error">{errors.lastName}</p>} 
              </div>
              <div className="details">
                <label className="form" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  className={errors.email? 'input-error':""}
                />
                {errors.email && <p className="error">{errors.email}</p>} 
              </div>
              <div className="details">
                <label className="form" htmlFor="password">
                  Password *
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  className={errors.password? 'input-error':""}
                />
                {errors.password && <p className="error">{errors.password}</p>} 
              </div>
              <div className="details">
                <label className="form" htmlFor="confirmPassword">
                  Password *
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                  className={errors.confirmPassword? 'input-error':""}
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>} 
              </div>
              <button className="sendBtn">Send</button>
            </form>
            <p className="loginClick" onClick={() => navigate("/login")}>
              Hesabınız var mı?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
