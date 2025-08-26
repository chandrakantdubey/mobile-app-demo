import DataFetching from "./pages/DataFetching";
import { BrowserRouter, Routes, Route } from "react-router";
import MobileApp from "./pages/MobileApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MobileApp />} />
        <Route path="/data-fetching" element={<DataFetching />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
