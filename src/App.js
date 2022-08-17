import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NewsDetails from "./Components/NewsDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/newsDetails/:newsId" exact element={<NewsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
