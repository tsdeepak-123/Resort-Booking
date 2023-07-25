import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./Routes/UserRoute";
import adminRoute from "./Routes/AdminRoute";
import partnerRoute from "./Routes/PartnerRoute";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<UserRoute/>} />
          <Route path="/admin" element={<adminRoute />} />
          <Route path="/partner" element={<partnerRoute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
