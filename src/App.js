import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import Login from "./auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="groups" element={<Groups />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
