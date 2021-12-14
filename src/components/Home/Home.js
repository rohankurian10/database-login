import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1>Home Page</h1>
      <Link to="/login">Login Page</Link>
      <Link to="/registration">Registration Page</Link>
    </div>
  );
};

export default Home;
