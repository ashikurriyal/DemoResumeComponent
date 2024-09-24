import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editSection } from './resumeSlice';
import PropTypes from 'prop-types';

const ResumeSection = ({ title, sectionName }) => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.resume.sections[sectionName]);
  const [isEditing, setIsEditing] = useState(false);
  const [tempContent, setTempContent] = useState(content);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    dispatch(editSection({ sectionName, content: tempContent }));
    setIsEditing(false);
  };

  return (
    <div className="p-4 border relative hover:bg-gray-100">
      {!isEditing ? (
        <div className="section-content">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{content}</p>
          <button
            className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="edit-mode">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full mb-2"
            value={tempContent}
            onChange={(e) => setTempContent(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

// PropTypes validation for props
ResumeSection.propTypes = {
  title: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
};

export default ResumeSection;
