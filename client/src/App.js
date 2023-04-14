import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Home/Navbar";
import Home from "./Home/Home";
import Hospital from "./Hospital/Hospital";
import SearchPatient from "./Hospital/SearchPatient";
import Sidebar from "./Hospital/Sidebar";
import EditPatientInfo from "./Hospital/EditPatientInfo";
import Admin from "./Admin/Admin";
import AdminSidebar from "./Admin/AdminSidebar";
import AddHospital from "./Admin/AddHospital";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full nunito-font h-full ">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* hospital section */}
          <Route
            exact
            path="/Hospital/*"
            element={
              <div className="flex flex-no-wrap">
                <Sidebar />
                <Routes>
                  <Route path="/" element={<Hospital />} />
                  <Route path="/SearchPatient" element={<SearchPatient />} />
                  <Route
                    path="/EditPatientInfo/:userId"
                    element={<EditPatientInfo />}
                  />
                </Routes>
              </div>
            }
          />
          {/* Admin Section */}
          <Route
            exact
            path="/Admin/*"
            element={
              <div className="flex flex-no-wrap">
                <AdminSidebar />
                <Routes>
                  <Route path="/Admin" element={<Admin />} />
                  <Route path="/Admin/AddHospital" element={<AddHospital />} />
                </Routes>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
