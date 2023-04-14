import { useState, useEffect } from 'react';
import axios from 'axios';

function PatientInfoPage() {
  const [patientInfo, setPatientInfo] = useState({});
  const [diseases, setDiseases] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState('');
  const [symptoms, setSymptoms] = useState([]);

  // Fetch patient information and diseases from the database on component mount
  useEffect(() => {
    const fetchPatientInfo = async () => {
      const response = await axios.get('/api/patient');
      setPatientInfo(response.data);
    };

    const fetchDiseases = async () => {
      const response = await axios.get('/api/diseases');
      setDiseases(response.data);
    };

    fetchPatientInfo();
    fetchDiseases();
  }, []);

  // When the selected disease changes, update the symptoms array with a form to enter yes/no for each symptom
  useEffect(() => {
    const disease = diseases.find(disease => disease.name === selectedDisease);
    if (disease) {
      const newSymptoms = disease.symptoms.map(symptom => ({ name: symptom, value: '' }));
      setSymptoms(newSymptoms);
    } else {
      setSymptoms([]);
    }
  }, [selectedDisease, diseases]);

  function handleDiseaseSelect(event) {
    setSelectedDisease(event.target.value);
  }

  function handleSymptomChange(event, index) {
    const newSymptoms = [...symptoms];
    newSymptoms[index].value = event.target.value;
    setSymptoms(newSymptoms);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Submit symptoms to the database
  }

  return (
    // <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/patient-profile-bg.jpg')" }}>
      <div className="bg-blue-50 bg-opacity-75 h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 shadow-lg transform -skew-y-6 sm:rounded-3xl sm:px-20"></div> */}
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-200">
                <h1 className="text-4xl font-bold mb-6">Patient Information</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block font-medium text-gray-700">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={patientInfo.firstName} disabled className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block font-medium text-gray-700">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={patientInfo.lastName} disabled className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="block font-medium text-gray-700">Age:</label>
                        <input type="text" id="age" name="age" value={patientInfo.age} disabled className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block font-medium text-gray-700">Gender:</label>
                        <input type="text" id="gender" name="gender" value={patientInfo.gender} disabled className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block font-medium text-gray-700">Phone:</label>
                        <input type="text" id="phone" name="phone" value={patientInfo.phone} disabled className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-gray-700">Email:</label>
                        <input type="text" id="email" name="email" value={patientInfo.email} disabled className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="disease" className="block font-medium text-gray-700">Disease:</label>
                        <select id="disease" name="disease" value={selectedDisease} onChange={handleDiseaseSelect} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option value="" disabled>Select a disease</option>
                            {diseases.map(disease => (
                            <option key={disease.id} value={disease.name}>{disease.name}</option>
                        ))}
                        </select>
                    </div>
                    {symptoms.length > 0 && (
                        <div className="col-span-2 mb-4">
                            <h2 className="text-2xl font-bold mb-4">Symptoms</h2>
                            <form onSubmit={handleSubmit}>
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 bg-gray-200">Symptom</th>
                                            <th className="py-2 px-4 bg-gray-200">Yes</th>
                                            <th className="py-2 px-4 bg-gray-200">No</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {symptoms.map((symptom, index) => (
                                            <tr key={symptom.name}>
                                                <td className="py-2 px-4">{symptom.name}</td>
                                                <td className="py-2 px-4 text-center"><input type="radio" id={`symptom-${index}-yes`} name={`symptom-${index}`} value="yes" checked={symptom.value === "yes"} onChange={handleSymptomChange(index)} /></td>
                                                <td className="py-2 px-4 text-center"><input type="radio" id={`symptom-${index}-no`} name={`symptom-${index}`} value="no" checked={symptom.value === "no"} onChange={handleSymptomChange(index)} /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button type="submit" className="mt-4 inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Save Symptoms
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        {/* </div> */}
        </div>
        </div>
    )
}
export default PatientInfoPage;
