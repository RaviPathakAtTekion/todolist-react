
import "./Header.scss";

const Header = () => {
  
  return (
    <header className="header--container">
      <h1>Manage Your Productivity</h1>
      <img src={require('./todolistmascot.png')} alt="todo mascot" />
    </header>
  );
};

export default Header;
