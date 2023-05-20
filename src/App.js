import Home from "./pages/Home";
import Editer from "./pages/Editer";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Editer" element={<Editer />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
