import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <nav>Logo tutaj dac</nav>

      <h1>Tutaj nazwa do czego jest strona</h1>

      <h2>tutaj dać tekst</h2>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/register">
        <button>Register</button>
      </Link>
    </>
  );
};

export default Landing;
