/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { PiBrainFill, PiMapPinAreaFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { TbReportMoney } from "react-icons/tb";
import hiringImage from "../../../public/images/HiringConfirmed.png";

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
        <div className="px-2 grid grid-cols-3 gap-2">
          <div className=" col-span-2 space-y-3">
            <h2 className="text-2xl font-bold">
              Full-Stack Developer with Expertise in Next.js 14+,
              MakerKit/ShipFast, and AI Integration
            </h2>
            <div className="flex gap-10">
              <p>Posted Date</p>
              <div className="flex items-center gap-2">
                <PiMapPinAreaFill className="text-xl text-green-500" />
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
                <li>
                  Refactor code and unify databases and authentication systems.
                </li>
                <li>
                  Customize UI using Tailwind CSS and component libraries like
                  Radix UI.
                </li>
                <li>Ensure AI functionality is smoothly integrated.</li>
                <li>Optimize performance and scalability.</li>
              </ul>
            </div>
            {/* Requirements */}
            <div className="">
              <p>
                <strong>Requirements:</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>Expertise in Next.js 14+ and React.</li>
                <li>Experience with MakerKit or ShipFast.</li>
                <li>
                  Knowledge of AI integrations (OpenAI, Anthropic) through
                  Vercel AI SDK.
                </li>
                <li>Proficiency with PostgreSQL, Redis, Vercel KV DB.</li>
                <li>
                  {" "}
                  Experience with Tailwind CSS and UI libraries (Radix, ShadCN).
                </li>
              </ul>
            </div>

            {/* Project Details */}
            <div className="">
              <p>
                <strong>Project Details:</strong>
              </p>
              <p>Timeline: 4 weeks</p>
              <p>
                Collaboration: Work alongside other developers and a project
                manager.
              </p>
            </div>
          </div>
          <div className="border-2 border-black row-span-2">02</div>
          <div className="border-2 border-green-500 rounded-lg col-span-2 shadow-lg  py-8">
            <div className="grid grid-cols-3 justify-items-center">
              <div className="flex items-center gap-3">
                <TbReportMoney className="text-5xl text-green-500" />
                <div>
                  <p>$10.00-$35.00</p>
                  <p>Hourly Rate</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <SlCalender className="text-5xl text-green-500" />
                <div>
                  <p>1 to 3 months</p>
                  <p>Project Length</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <PiBrainFill className="text-5xl text-green-500" />
                <div>
                  <p>Intermediate</p>
                  <p>Difficulty Level</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-2">
            <div className="grid grid-cols-2 items-center">
              <div className="space-y-2">
                <h1 className="font-semibold text-2xl">
                  Maybe The Last Apply!
                </h1>
                <p>Who knows maybe you will hire from this apply</p>
              </div>
              <div>
                <img src={hiringImage} alt="" />
              </div>
            </div>
          </div>
          <div className="border-2 rounded-lg border-green-500 col-span-3">
            <div className="p-4 md:p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                Client's recent history (2)
              </h2>
              <h3 className="text-md text-gray-600 mb-2">Jobs in progress</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Test Render Shoes</h4>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-2">⭐⭐⭐⭐✰</span>
                  <span className="text-sm text-gray-500">2.0</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  It would be great if you could give a clear response.
                </p>
                <p className="text-sm text-gray-700">
                  To freelancer:{" "}
                  <span className="text-yellow-500">Hameed M.</span>{" "}
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>{" "}
                  <span className="text-gray-500">4.3 Good Job.</span>
                </p>
                <div className="mt-2 text-xs text-gray-400">
                  <p>Apr 2020 - Apr 2022</p>
                  <p>0 hrs</p>
                  <p>Billed: $20.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;