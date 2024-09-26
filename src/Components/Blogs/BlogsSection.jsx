import { useState } from "react";
import BlogsCard from "./BlogsCard";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const BlogsSection = () => {
  const [sortBy, setSortBy] = useState("newest");
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [jobTypeOpen, setJobTypeOpen] = useState(false);
  // Toggling the dropdowns
  const toggleExperience = () => setExperienceOpen(!experienceOpen);
  const toggleJobType = () => setJobTypeOpen(!jobTypeOpen);

  const blogs = [
    {
      title: "React & Tailwind CSS Developer for Feature Implementation",
      shortDescription:
        "The new design already exists in Figma. Animations are already implemented but have to be extended into the new elements.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      datePosted: "2023-09-25",
      experienceLevel: "Intermediate",
      jobType: "Hourly",
      priceRange: "$12.00 - $29.00/hr",
    },
    {
      title: "UI Developer with Expertise in React & React Native",
      shortDescription:
        "We are looking for an experienced UI Developer proficient in React and React Native to improve our eCommerce platform.",
      tags: ["React", "React Native", "JavaScript"],
      datePosted: "2023-09-23",
      experienceLevel: "Expert",
      jobType: "Fixed-Price",
      priceRange: "$500 - $1K",
    },
    {
      title: "Full Stack Developer Needed for E-commerce Site",
      shortDescription:
        "Seeking a full-stack developer to enhance the performance and scalability of our online retail platform.",
      tags: ["Node.js", "React", "MongoDB"],
      datePosted: "2023-09-22",
      experienceLevel: "Advanced",
      jobType: "Hourly",
      priceRange: "$25.00 - $50.00/hr",
    },
    {
      title: "Mobile App Developer for Cross-Platform App",
      shortDescription:
        "Develop a cross-platform mobile app with a focus on usability and responsiveness for an e-learning platform.",
      tags: ["Flutter", "Dart", "Firebase"],
      datePosted: "2023-09-21",
      experienceLevel: "Intermediate",
      jobType: "Fixed-Price",
      priceRange: "$1K - $2.5K",
    },
    {
      title: "WordPress Developer for Custom Plugin Creation",
      shortDescription:
        "Create a custom plugin for managing event bookings and payments on our WordPress site.",
      tags: ["WordPress", "PHP", "MySQL"],
      datePosted: "2023-09-20",
      experienceLevel: "Beginner",
      jobType: "Fixed-Price",
      priceRange: "$200 - $500",
    },
    {
      title: "Front-End Developer for Travel Website Redesign",
      shortDescription:
        "Looking for a front-end developer to redesign our travel website and implement new UI/UX improvements.",
      tags: ["HTML", "CSS", "JavaScript"],
      datePosted: "2023-09-19",
      experienceLevel: "Intermediate",
      jobType: "Hourly",
      priceRange: "$15.00 - $35.00/hr",
    },
    {
      title: "Backend Developer for API Integration",
      shortDescription:
        "Implement and integrate third-party APIs for our healthcare platform, ensuring security and efficiency.",
      tags: ["Node.js", "Express", "API"],
      datePosted: "2023-09-18",
      experienceLevel: "Advanced",
      jobType: "Hourly",
      priceRange: "$40.00 - $80.00/hr",
    },
    {
      title: "Shopify Developer for Custom E-commerce Solutions",
      shortDescription:
        "Create custom Shopify themes and functionalities for our expanding online retail business.",
      tags: ["Shopify", "Liquid", "JavaScript"],
      datePosted: "2023-09-17",
      experienceLevel: "Expert",
      jobType: "Fixed-Price",
      priceRange: "$1K - $3K",
    },
    {
      title: "React Native Developer for Fitness App",
      shortDescription:
        "Develop new features for our fitness app, focusing on smooth user experience and performance optimization.",
      tags: ["React Native", "JavaScript", "Firebase"],
      datePosted: "2023-09-16",
      experienceLevel: "Intermediate",
      jobType: "Hourly",
      priceRange: "$20.00 - $45.00/hr",
    },
    {
      title: "DevOps Engineer for Cloud Migration",
      shortDescription:
        "Migrate our existing infrastructure to AWS, ensuring scalability, security, and high availability.",
      tags: ["AWS", "Docker", "Kubernetes"],
      datePosted: "2023-09-15",
      experienceLevel: "Expert",
      jobType: "Hourly",
      priceRange: "$50.00 - $100.00/hr",
    },
    {
      title: "Game Developer for 2D Multiplayer Game",
      shortDescription:
        "Looking for an experienced game developer to create a 2D multiplayer game using Unity or Unreal Engine.",
      tags: ["Unity", "Unreal Engine", "C#"],
      datePosted: "2023-09-14",
      experienceLevel: "Advanced",
      jobType: "Fixed-Price",
      priceRange: "$5K - $10K",
    },
    {
      title: "Python Developer for Machine Learning Project",
      shortDescription:
        "We are seeking a Python developer to build and optimize machine learning models for our data analytics platform.",
      tags: ["Python", "Machine Learning", "TensorFlow"],
      datePosted: "2023-09-13",
      experienceLevel: "Expert",
      jobType: "Hourly",
      priceRange: "$35.00 - $75.00/hr",
    },
    {
      title: "Database Administrator for Performance Tuning",
      shortDescription:
        "Improve the performance and query optimization of our existing MySQL database for our SaaS product.",
      tags: ["MySQL", "Database", "Performance"],
      datePosted: "2023-09-12",
      experienceLevel: "Advanced",
      jobType: "Hourly",
      priceRange: "$40.00 - $90.00/hr",
    },
    {
      title: "iOS Developer for Health Monitoring App",
      shortDescription:
        "Develop and implement new features for a health monitoring app with Bluetooth device integration.",
      tags: ["iOS", "Swift", "Bluetooth"],
      datePosted: "2023-09-11",
      experienceLevel: "Intermediate",
      jobType: "Fixed-Price",
      priceRange: "$1K - $3K",
    },
  ];

  const sortedBlogs = [...blogs].sort((a, b) => {
    return sortBy === "newest"
      ? new Date(b.datePosted) - new Date(a.datePosted)
      : new Date(a.datePosted) - new Date(b.datePosted);
  });

  return (
    <div>
      <div className="flex items-center container mx-auto justify-end gap-2 text-green-500">
        <label className="text-lg font-medium">Sort by</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-6 mt-2">
        {/* Left Sidebar */}
        <div className="col-span-1 text-green-500 p-4 rounded-lg h-1/4">
          <h2 className="text-xl font-bold mb-4 text-center">Filters</h2>

          {/* Experience Level Dropdown */}
          <div className="border-b mb-4">
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={toggleExperience}
            >
              <span className="text-lg font-medium">Experience level</span>
              <span>
                {experienceOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>
            {experienceOpen && (
              <div className="py-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Begineer
                </label>
                <label className="flex items-center mt-2">
                  <input type="checkbox" className="mr-2" />
                  Intermediate
                </label>
                <label className="flex items-center mt-2">
                  <input type="checkbox" className="mr-2" />
                  Expert
                </label>
                <label className="flex items-center mt-2">
                  <input type="checkbox" className="mr-2" />
                  Advanced
                </label>
              </div>
            )}
          </div>
          {/* Job Type Dropdown */}
          <div className="border-b mb-4">
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={toggleJobType}
            >
              <span className="text-lg font-medium">Job type</span>
              <span>{jobTypeOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
            {jobTypeOpen && (
              <div className="py-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Hourly
                </label>
                <label className="flex items-center mt-2">
                  <input type="checkbox" className="mr-2" />
                  Fixed-Price
                </label>
                {/* Price Range for Hourly */}
                <div className="flex items-center mt-4">
                  <input
                    type="number"
                    className="border px-2 py-1 rounded w-20 mr-2"
                    placeholder="Min"
                  />
                  <span className="mr-2">/hr</span>
                  <input
                    type="number"
                    className="border px-2 py-1 rounded w-20"
                    placeholder="Max"
                  />
                </div>
                {/* Price Range for Fixed Price */}
                <div className="mt-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Less than $100
                  </label>
                  <label className="flex items-center mt-2">
                    <input type="checkbox" className="mr-2" />
                    $100 to $500
                  </label>
                  <label className="flex items-center mt-2">
                    <input type="checkbox" className="mr-2" />
                    $500 - $1K
                  </label>
                  <label className="flex items-center mt-2">
                    <input type="checkbox" className="mr-2" />
                    $1K - $5K
                  </label>
                  <label className="flex items-center mt-2">
                    <input type="checkbox" className="mr-2" />
                    $5K+
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Blogs Section */}
        <div className="col-span-3 grid grid-cols-1 gap-6">
          {sortedBlogs.map((blog, index) => (
            <BlogsCard
              key={index}
              title={blog.title}
              shortDescription={blog.shortDescription}
              tags={blog.tags}
              datePosted={blog.datePosted}
              experienceLevel={blog.experienceLevel}
              jobType={blog.jobType}
              priceRange={blog.priceRange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
