import NavBar from "./navbar/NavBar";
import Main from "./Main.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="page_body">
        <Main />
        <Sidebar />
      </div>
    </>
  );
}
