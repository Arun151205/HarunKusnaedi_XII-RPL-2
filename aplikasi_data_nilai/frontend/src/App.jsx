import {BrowserRouter,Routes,Route} from "react-router-dom";
import Sidebar from './components/Sidebar.jsx';
import Homepage from "./pages/Homepage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App