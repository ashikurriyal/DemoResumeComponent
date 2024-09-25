import  { useState } from "react";
import EditableSection from "./EditableSection";

const NewResume = () => {
  const [nameData, setNameData] = useState({
    name: "Jon Snow",
    designation: "Front-End Developer",
  });

  // const [contactData, setContactData] = useState({
  //   email: "jonsnow@example.com",
  //   phone: "(+1) 234-567-890",
  //   location: "Winterfell",
  // });

  const handleSaveNameData = (newData) => {
    setNameData(newData);
  };
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg p-10 my-10 rounded-lg">
      <EditableSection
        title={nameData.name}
        content={nameData.designation}
        fields={nameData}
        onSave={handleSaveNameData}
      />

      <EditableSection

      ></EditableSection>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8">
        <div className="text-center mb-4">
          <h4 className="text-gray-800 font-semibold">Phone</h4>
          <p className="text-gray-600">(+1) 234-567-890</p>
        </div>
        <div className="text-center mb-4">
          <h4 className="text-gray-800 font-semibold">Email</h4>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>
        <div className="text-center mb-4">
          <h4 className="text-gray-800 font-semibold">Location</h4>
          <p className="text-gray-600">San Francisco, CA</p>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">
          Professional Summary
        </h2>
        <p className="text-gray-600">
          Experienced Full Stack Developer with a passion for building
          responsive and scalable web applications. Expertise in JavaScript,
          React, Node.js, and modern web development technologies. Adept at
          working in agile environments and leading development teams to deliver
          top-notch solutions.
        </p>
      </div>

      {/* Experience Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">
          Work Experience
        </h2>

        {/* Job 1 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">
            Senior Full Stack Developer
          </h3>
          <p className="text-gray-600">
            Tech Innovators Inc. | Jan 2020 - Present
          </p>
          <ul className="list-disc ml-5 mt-2 text-gray-600">
            <li>
              Developed and maintained full-stack web applications using React,
              Node.js, and MongoDB.
            </li>
            <li>
              Led a team of 5 developers to build scalable and secure
              cloud-based solutions.
            </li>
            <li>
              Collaborated with UX/UI designers to implement responsive designs
              and improve user experience.
            </li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">
            Frontend Developer
          </h3>
          <p className="text-gray-600">
            Creative Solutions | June 2017 - Dec 2019
          </p>
          <ul className="list-disc ml-5 mt-2 text-gray-600">
            <li>
              Developed and optimized dynamic websites using React and Vue.js.
            </li>
            <li>Worked closely with backend teams to integrate REST APIs.</li>
            <li>
              Ensured cross-browser compatibility and optimized web applications
              for performance.
            </li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">
          Education
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-gray-600">
            University of California, Berkeley | Graduated 2017
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-600 font-semibold">JavaScript</p>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-600 font-semibold">React.js</p>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-600 font-semibold">Node.js</p>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-600 font-semibold">MongoDB</p>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-600 font-semibold">HTML & CSS</p>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-600 font-semibold">Git & GitHub</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">
          Projects
        </h2>

        {/* Project 1 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">
            E-commerce Website
          </h3>
          <p className="text-gray-600">
            A full-stack e-commerce website built using React, Node.js, and
            MongoDB. Integrated features like product management, cart
            functionality, and payment gateway.
          </p>
        </div>

        {/* Project 2 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">
            Task Management App
          </h3>
          <p className="text-gray-600">
            A task management application for teams to organize tasks and track
            progress. Built with React and Firebase for real-time updates and
            user authentication.
          </p>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">
          Certifications
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">
            Certified React Developer
          </h3>
          <p className="text-gray-600">Issued by React Institute | 2021</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">
            AWS Certified Solutions Architect
          </h3>
          <p className="text-gray-600">Issued by Amazon Web Services | 2022</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p className="text-gray-500">© 2024 John Doe. All rights reserved.</p>
      </div>
    </div>
  );
};

export default NewResume;
