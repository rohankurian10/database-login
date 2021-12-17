import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1>Home Page</h1>
      <button>
        <Link className="abc" to="/login">
          Login Page
        </Link>
      </button>
      <button>
        <Link className="abc" to="/registration">
          Registration Page
        </Link>
      </button>
    </div>
  );
};

export default Home;
