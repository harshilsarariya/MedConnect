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
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import PatientInfoPage from "./Hospital/PatientInfoPage";
import PatientProfile from "./Patient/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* General routes */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/signup" exact element={<Signup />} />
                <Route path="/login" exact element={<Login />} />
              </Routes>
            </>
          }
        />

        {/* Hospital section */}
        <Route
          path="/hospital/*"
          element={
            <>
              <Navbar />
              <div className="flex flex-no-wrap">
                <Sidebar />
                <Routes>
                  <Route path="/" element={<Hospital />} />
                  <Route path="/searchpatient" element={<SearchPatient />} />
                  <Route
                    path="/editpatientinfo/:userId"
                    element={<EditPatientInfo />}
                  />
                  <Route path="/patientinfo" element={<PatientInfoPage />} />
                </Routes>
              </div>
            </>
          }
        />

        {/* Admin section */}
        <Route
          path="/admin/*"
          element={
            <>
              <Navbar />
              <div className="flex flex-no-wrap">
                <AdminSidebar />
                <Routes>
                  <Route path="/" element={<Admin />} />
                  <Route path="/addhospital" element={<AddHospital />} />
                </Routes>
              </div>
            </>
          }
        />

        {/* Patient section */}
        <Route
          path="/patient/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<PatientProfile />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
