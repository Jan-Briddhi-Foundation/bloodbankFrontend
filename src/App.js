import "./App.css";
import Header from "./components/header";
import Criteria from "./pages/Donorcriteria";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Criteria />


    </div>
  );
}

export default App;