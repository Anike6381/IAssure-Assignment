import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/contact");
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", height: "300px" }}>
      <h1>This is a Home Page</h1>
      <h3>You will be redirected to Contact page in just 2 secs.</h3>
      <h3>
        If you didn't, click <Link to="/contact">here</Link>
      </h3>
    </div>
  );
};

export default Home;
