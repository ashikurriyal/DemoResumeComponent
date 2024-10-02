import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { PiMapPinAreaFill } from "react-icons/pi";

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
          isOpen ? "translate-x-0" : "translate-x-full"
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
        <div className="border-2 border-black p-4 grid grid-cols-3">
          <div className="border-2 border-black col-span-2 space-y-3">
            <h2 className="text-2xl font-bold">
              Full-Stack Developer with Expertise in Next.js 14+,
              MakerKit/ShipFast, and AI Integration
            </h2>
            <div className="flex gap-10">
              <p>Posted Date</p>
              <div className="flex items-center gap-2">
                <PiMapPinAreaFill className="text-xl"/>
                <p>Worldwide</p>
              </div>
            </div>
            <hr />
            <h4>
              We are looking for an experienced Full-Stack Developer to
              integrate two AI-driven applications into a unified SaaS platform
              using MakerKit or ShipFast. You’ll need strong experience with
              Next.js 14+, AI technologies, and familiarity with SaaS
              frameworks.
            </h4>

            {/* Project Overview */}
            <div className="">
              <p>
                <strong>Project Overview:</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>AI Search Engine (Next.js, Redis, Tailwind)</li>
                <li>AI Chatbot (Next.js, Vercel KV DB, AI SDKs)</li>
              </ul>
            </div>

            {/* Goal */}
            <div className="">
              <p>
                <strong>Goal:</strong>
              </p>
              <p>
                Integrate these applications into a single SaaS platform, using
                MakerKit or ShipFast to implement multi-tenancy, subscription
                management, and unified authentication with PostgreSQL for
                long-term storage.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="">
              <p>
                <strong>Responsibilities:</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>Integrate the two apps into MakerKit or ShipFast.</li>
                <li>Refactor code and unify databases and authentication systems.</li>
                <li>Customize UI using Tailwind CSS and component libraries like Radix UI.</li>
                <li>Ensure AI functionality is smoothly integrated.</li>
                <li>Optimize performance and scalability.</li>
              </ul>
            </div>
          </div>
          <div className="border-2 border-black row-span-2">02</div>
          <div className="border-2 border-black">03</div>
          <div className="border-2 border-black">04</div>
          <div className="border-2 border-black col-span-3">05</div>
          {/*<div className="border-2 border-black">06</div>
          <div className="border-2 border-black">07</div>
          <div className="border-2 border-black">08</div> */}
        </div>

        <p className="text-gray-700 mt-2">
          We are looking for an experienced Full-Stack Developer with expertise
          in Next.js 14+, MakerKit/ShipFast, and AI integration.
        </p>
      </div>
    </div>
  );
};

export default JobDetailsPage;
