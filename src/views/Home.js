import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home-view">
    <h1>Welcome to Natiq</h1>
    <p>Transform your Arabic text into spoken words with echo effects!</p>
    <Link to="/natiq">
      <button>Get Started</button>
    </Link>
  </div>
);

export default Home;
