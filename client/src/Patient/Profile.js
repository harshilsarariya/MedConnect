import { useState } from "react";

function PatientProfile({
  id,
  name,
  age,
  gender,
  bloodGroup,
  disease_name,
  disease_severity,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name,
    age,
    gender,
    bloodGroup,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // handle form submission and update profile information
    // ...
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="container mx-auto">
      <div className="row">
        <div className="col-md-4">
          <h1 className=" text-left text-2xl font-bold mb-4 mt-10 ml-5">
            Patient Profile
          </h1>
          <div className="ml-5 max-w-md mx-auto bg-blue-50 mt-7 rounded-md shadow-md overflow-hidden">
            <div className="p-4">
              <p className="text-gray-500">ID: {id}</p>
              <p className="text-gray-500">Name: {id}</p>
              <h2 className="text-2xl font-bold">{name}</h2>
              <div className="flex items-center">
                <span className="text-gray-500">Age:</span>
                <span className="ml-2">{age}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500">Gender:</span>
                <span className="ml-2">{gender}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500">Blood Group:</span>
                <span className="ml-2">{bloodGroup}</span>
              </div>
              <div className="text-center mt-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  onClick={handleEdit}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        {isEditing && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <div className="inline-block align-bottom bg-blue-50 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-blue-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
                  <form onSubmit={handleSave}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block font-medium text-gray-700"
                      >
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="age"
                        className="block font-medium text-gray-700"
                      >
                        Age:
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="gender"
                        className="block font-medium text-gray-700"
                      >
                        Gender:
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="bloodGroup"
                        className="block font-medium text-gray-700"
                      >
                        Blood Group:
                      </label>
                      <input
                        type="text"
                        id="bloodGroup"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="col-md-2">
          <div className="set">
            <h1 className="text-left text-2xl font-bold mb-4 mt-10 ml-5">
              Patient Diseases
            </h1>
            <div className="ml-5 max-w-md mx-auto bg-blue-50 mt-7 rounded-md shadow-md overflow-hidden mb-5">
              <div className="p-4">
                <p className="text-gray-500">Disease Name: {disease_name}</p>
                <h2 className="text-2xl font-bold">{disease_name}</h2>
                <div className="flex items-center">
                  <span className="text-gray-500">Severity:</span>
                  <span className="ml-2">{disease_severity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;
