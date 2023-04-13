import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Home/Navbar";
import Home from "./Home/Home";
import Hospital from "./Hospital/Hospital";
import SearchPatient from "./Hospital/SearchPatient";
import Sidebar from "./Hospital/Sidebar";
import EditPatientInfo from "./Hospital/EditPatientInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full nunito-font h-full bg-[#F1F5F9]">
        <Navbar />
        <div className="flex flex-no-wrap">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* hospital section */}
            <Route path="/Hospital" element={<Hospital />} />
            <Route path="/Hospital/SearchPatient" element={<SearchPatient />} />
            <Route
              path="/Hospital/EditPatientInfo/:userId"
              element={<EditPatientInfo />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
