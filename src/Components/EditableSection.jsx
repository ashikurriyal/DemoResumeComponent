import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import EditModal from "./EditModal";

const EditableSection = ({ title, content, fields, onSave }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className="relative hover:border-4 hover:border-black hover:rounded-xl p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <FiEdit
          onClick={handleEditClick}
          className="absolute top-2 right-2 text-xl text-gray-800 cursor-pointer"
        />
      )}

      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        <p className="text-xl text-gray-600">{content}</p>
      </div>

      

      {isModalOpen && (
        <EditModal
          fields={fields}
          onSave={onSave}
          onClose={handleModalClose}
        />
      )}
    </section>
  );
};

export default EditableSection;
