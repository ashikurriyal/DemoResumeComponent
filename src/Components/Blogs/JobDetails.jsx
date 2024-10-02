import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const JobDetailsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const closeDetails = (e) => {
    if (e.target.id === "overlay") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Button to open details */}
      <button
        onClick={toggleDetails}
        className="bg-blue-500 text-white p-3 rounded-lg"
      >
        Show Job Details
      </button>

      {/* Overlay for the sidebar */}
      {isOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={closeDetails}
        ></div>
      )}

      {/* Job details sidebar */}
      <div
        className={`fixed top-0 right-0 z-40 w-64 p-4 overflow-y-auto transition-transform shadow-xl  ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-white shadow-lg z-40 max-w-5xl md:w-full h-full md:p-4`}
      >
        {/* Back button */}
        <button
          onClick={toggleDetails}
          className="text-gray-500 hover:text-gray-700 text-3xl"
        >
          <IoArrowBackOutline />
        </button>

        {/* Job Details */}
        <h2 className="text-2xl font-bold mt-4">Full-Stack Developer</h2>
        <p className="text-gray-700 mt-2">
          We are looking for an experienced Full-Stack Developer with expertise
          in Next.js 14+, MakerKit/ShipFast, and AI integration.
        </p>

        <div className="mt-4">
          <p>
            <strong>Project Overview:</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>AI Search Engine (Next.js, Redis, Tailwind)</li>
            <li>AI Chatbot (Next.js, Vercel KV DB, AI SDKs)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
