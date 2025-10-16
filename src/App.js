import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import 'animate-ui/dist/animate-ui.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;