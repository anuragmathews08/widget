import { NavBar, CircleWidget, BarWidget } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center bg-blue-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<CircleWidget />} />
        <Route path="circle-widget" element={<CircleWidget />} />
        <Route path="bar-widget" element={<BarWidget />} />
      </Routes>
    </div>
  );
}

export default App;
