import DataFetching from "./pages/DataFetching";
import { BrowserRouter, Routes, Route } from "react-router";
import MobileApp from "./pages/MobileApp";
import DashboardApp from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter basename="/mobile-app-demo">
      <Routes>
        <Route path="/" element={<MobileApp />} />
        <Route path="/data-fetching" element={<DataFetching />} />
        <Route path="/dashboard-sales" element={<DashboardApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
