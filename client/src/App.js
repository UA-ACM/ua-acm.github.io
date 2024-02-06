import Header from "./Header";
import Body from "./Body";
import CrimsonPage from "./CrimsonPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
   <>
    <Router>
      <Header />
      <div className="divider"></div>
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/CrimsonCrossover" element={<CrimsonPage/>} />
      </Routes>
    </Router>
   </>
  );
}
