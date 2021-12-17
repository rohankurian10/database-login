import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1>Home Page</h1>
      <div className="Button-Container">
        <Link className="abc" to="/login">
          <button>Login Page</button>
        </Link>
        <Link className="abc" to="/registration">
          <button>Regisration Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
