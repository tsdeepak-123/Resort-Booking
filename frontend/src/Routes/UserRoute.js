import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../pages/User/HomePage";


function UserRoute() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
  
    </div>
  );
}

export default UserRoute;
