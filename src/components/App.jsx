import NavBar from "./navbar/NavBar";
import Main from "./Main.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="page_body">
        <Main />
        <aside>This is the sidebar</aside>
      </div>
    </>
  );
}
