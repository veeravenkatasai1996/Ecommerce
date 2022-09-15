import React from "react";
import { useNavigate } from "react-router-dom";
function Homepage() {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/Login");
  };
  return (
    <div className="d-flex justify-content-between">
      <div className="home-section">
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
      <div className="home-image">
        <img src="./image.jpg" alt="loading" />
      </div>
    </div>
  );
}
export default Homepage;
