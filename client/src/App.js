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
import InitialPage from "./Components/InitialPage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import PatientInfoPage from "./Hospital/PatientInfoPage";
import PatientProfile from "./Patient/Profile";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<InitialPage/>}/>
        <Route path="/signup" exact element={<Signup />} />
			  <Route path="/login" exact element={<Login />} />
    </Routes>
      <div className="w-full nunito-font h-full ">
        <Navbar />
        <Routes>
        
          {/* <Route exact path="/" element={<Home />} /> */}
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
                  <Route path="/PatientInfo" element={<PatientInfoPage />} />
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
        {/*Patient Section */}
        <Routes>
        <Route path="/patientprofile" element={<PatientProfile/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
