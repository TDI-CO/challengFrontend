import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="w-screen h-screen p-10">
      <Header />
      <div className="  flex justify-between items-center w-full">
        <div className="bg-red-400 w-full h-full">
          {/* Aquí va tu componente */}
        </div>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
