import "./App.css";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurCreations from "./components/Pages/Creations/OurCreations";
import CreationDetails from "./components/Pages/Creations/CreationDetails";
import Mission from "./components/Pages/Mission/Mission";

function App() {
  let routes;
  routes = (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/ourcreations" element={<OurCreations />} />
      <Route path="/creationdetails/:id" element={<CreationDetails />} />
      <Route path="/mission" element={<Mission/>}/>
    </Routes>
  );
  return (
    <Router>
      <div className="App">
        <NavBar />
        {routes}
      </div>
    </Router>
  );
}

export default App;