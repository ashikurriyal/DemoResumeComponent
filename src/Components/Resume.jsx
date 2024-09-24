import  { useState } from 'react';

const Resume = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    // Template 1
    {
      id: 1,
      name: 'Classic Minimalist',
      content: (
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-lg text-gray-600">Software Developer</p>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Experience</h3>
            <p>Senior Developer at ABC Corp</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Education</h3>
            <p>BSc in Computer Science</p>
          </div>
        </div>
      ),
    },
    // Template 2
    {
      id: 2,
      name: 'Modern Professional',
      content: (
        <div className="bg-blue-50 text-blue-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Jane Smith</h2>
          <p className="text-lg text-blue-600">Project Manager</p>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Experience</h3>
            <p>Project Lead at XYZ Ltd.</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Education</h3>
            <p>MBA in Business Management</p>
          </div>
        </div>
      ),
    },
    // Template 3
    {
      id: 3,
      name: 'Elegant Design',
      content: (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Alice Johnson</h2>
          <p className="text-lg text-gray-300">Graphic Designer</p>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Experience</h3>
            <p>Creative Lead at Creatives Inc.</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Education</h3>
            <p>BFA in Graphic Design</p>
          </div>
        </div>
      ),
    },
    // Template 4
    {
      id: 4,
      name: 'Corporate Look',
      content: (
        <div className="bg-white text-gray-900 border-l-4 border-blue-600 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Chris Martin</h2>
          <p className="text-lg text-gray-700">Data Analyst</p>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Experience</h3>
            <p>Data Specialist at DataCorp</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Education</h3>
            <p>MSc in Data Science</p>
          </div>
        </div>
      ),
    },
    // Template 5
    {
      id: 5,
      name: 'Creative Flair',
      content: (
        <div className="bg-yellow-100 text-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Maxwell Lee</h2>
          <p className="text-lg text-yellow-600">Art Director</p>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Experience</h3>
            <p>Art Director at ArtHouse</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Education</h3>
            <p>BFA in Visual Arts</p>
          </div>
        </div>
      ),
    },
    // Template 6
    {
      id: 6,
      name: 'Bold & Dynamic',
      content: (
        <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Sarah Brown</h2>
          <p className="text-lg">Marketing Executive</p>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Experience</h3>
            <p>Marketing Head at StartX</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Education</h3>
            <p>BA in Marketing</p>
          </div>
        </div>
      ),
    },
    // Template 7
    {
      id: 7,
      name: 'Sleek & Simple',
      content: (
        <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">David Green</h2>
          <p className="text-lg">Software Engineer</p>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Experience</h3>
            <p>Senior Developer at TechWorks</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Education</h3>
            <p>BSc in Computer Science</p>
          </div>
        </div>
      ),
    },
    // Template 8
    {
      id: 8,
      name: 'Dynamic Layout',
      content: (
        <div className="bg-green-100 text-green-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Elena White</h2>
          <p className="text-lg">Product Manager</p>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Experience</h3>
            <p>Product Head at InnovateX</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Education</h3>
            <p>MBA in Product Management</p>
          </div>
        </div>
      ),
    },
    // Template 9
    {
      id: 9,
      name: 'Elegant Lines',
      content: (
        <div className="bg-white border-t-4 border-purple-600 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Samantha King</h2>
          <p className="text-lg text-purple-600">Business Consultant</p>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Experience</h3>
            <p>Consultant at BusinessGrowth Inc.</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Education</h3>
            <p>MBA in Finance</p>
          </div>
        </div>
      ),
    },
    // Template 10
    {
      id: 10,
      name: 'Modern Gradient',
      content: (
        <div className="bg-gradient-to-r from-blue-400 to-purple-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Michael Black</h2>
          <p className="text-lg">Full Stack Developer</p>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Experience</h3>
            <p>Lead Developer at WebWorks</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Education</h3>
            <p>BSc in Software Engineering</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Choose Your Resume Template</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`p-4 cursor-pointer transition-transform transform hover:scale-105 ${
              selectedTemplate === template.id ? 'ring-4 ring-indigo-500' : ''
            }`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            {template.content}
          </div>
        ))}
      </div>
      {selectedTemplate && (
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Selected Template: {templates.find(t => t.id === selectedTemplate).name}</h2>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700">
            Download Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default Resume;
