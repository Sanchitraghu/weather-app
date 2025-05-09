import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { CurrentWeather, Home } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city/:cityName" element={<CurrentWeather />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
