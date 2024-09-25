import { useState } from "react";

const EditModal = ({ fields, onSave, onClose }) => {
  const [formValues, setFormValues] = useState(fields);

  const handleInputChange = (e, fieldName) => {
    setFormValues({
      ...formValues,
      [fieldName]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(formValues);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Edit Information</h2>

        {Object.keys(formValues).map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-gray-700 mb-2">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type="text"
              value={formValues[field]}
              onChange={(e) => handleInputChange(e, field)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
        ))}

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Close
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
