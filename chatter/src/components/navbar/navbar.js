import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-logo">Chatter</h2>
      </div>
      <div className="navbar-right">
        <button className="darkMode-btn">Dark Mode</button>
        <div className="profile-btn-container">
          <img
            src="https://robohash.org/2?set=set2&size=80x80"
            alt="Avatar"
            class="avatar"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
