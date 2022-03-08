import NavBar from "./NavBar";
import Main from "./Main.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Main />
        <aside>This is the sidebar</aside>
      </div>
    </>
  );
}
