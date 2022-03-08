import NavBarIcon from "./NavBarIcon.jsx";
import NavBarOptions from "./NavBarOptions.jsx";
import "../css/navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavBarIcon />
      <input placeholder="Pesquisar" />
      <NavBarOptions />
    </nav>
  );
}
