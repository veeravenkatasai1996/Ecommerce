import React from "react";
import { useNavigate } from "react-router-dom";
function Homepage() {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/Login");
  };
  return (
    <div className="row">
      <div className="home-section col-6 col-md-9 col-lg-6">
        <h1>Lets do Shopping Now</h1>
        <div>

          <button
            className="btn btn-primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="home-image col-md-8 col-lg-6">
        <img src="./image.jpg" alt="loading" />
      </div>
    </div>
  );
}
export default Homepage;
