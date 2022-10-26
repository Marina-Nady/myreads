import "./App.css";
import { Routes,Route} from "react-router-dom";
import Home from './components/Home'
import Search from './components/Search'

function App() {

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>

  );
}

export default App;
