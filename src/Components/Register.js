import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
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
            <form>
              <h4>Fill in Your Details</h4>
              <div className="details">
                <p>First Name *</p>
                <input></input>
              </div>
              <div className="details">
                <p>Last Name *</p>
                <input></input>
              </div>
              <div className="details">
                <p>Email *</p>
                <input type="email"></input>
              </div>
              <div className="details">
                <p>Password *</p>
                <input></input>
              </div>
              <div className="details">
                <p>Confirm Password *</p>
                <input></input>
              </div>
              <button className="sendBtn">Send</button>
            </form>
            <p onClick={() => navigate("/login")}>Hesabınız var mı?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
