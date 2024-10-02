import { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import BlogDetailsSidebar from "./BlogDetailsSidebar"; // Assuming the sidebar component exists

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [sortBy, setSortBy] = useState("newest");
  const [selectedBlog, setSelectedBlog] = useState(null); // Store the selected blog here
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // To control sidebar visibility
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [jobTypeOpen, setJobTypeOpen] = useState(false);

  // Toggling the dropdowns
  const toggleExperience = () => setExperienceOpen(!experienceOpen);
  const toggleJobType = () => setJobTypeOpen(!jobTypeOpen);

  useEffect(() => {
    fetch("blogs.JSON")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const sortedBlogs = [...blogs].sort((a, b) => {
    return sortBy === "newest"
      ? new Date(b.datePosted) - new Date(a.datePosted)
      : new Date(a.datePosted) - new Date(b.datePosted);
  });

  // Function to open the sidebar with the selected blog
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog); // Set the clicked blog data
    setIsSidebarOpen(true); // Open the sidebar
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="bg-green-50 p-6 md:p-14">
        <h1 className="text-center text-3xl md:text-5xl font-semibold text-green-500">
          Blogs Page
        </h1>
      </div>

      {/* Sort by Section */}
      <div className="flex flex-col md:flex-row items-center container mx-auto justify-end gap-2 text-green-500 mt-4 md:mt-6">
        <label className="text-lg font-medium">Sort by</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded px-3 py-2 mt-2 md:mt-0"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto mt-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-1 bg-gray-50 text-green-500 p-4 rounded-lg h-auto">
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
                  Beginner
                </label>
                <label className="flex items-center mt-2">
                  <input type="checkbox" className="mr-2" />
                  Intermediate
                </label>
                <label className="flex items-center mt-2">
                  <input type="checkbox" className="mr-2" />
                  Expert
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
        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 gap-4 md:gap-2">
          {sortedBlogs.map((blog) => (
            <BlogsCard
              key={blog.id}
              blog={blog}
              onClick={() => handleBlogClick(blog)} // Pass the click handler
            />
          ))}
        </div>
      </div>

      {/* Blog Details Sidebar */}
      {isSidebarOpen && selectedBlog && (
        <BlogDetailsSidebar blog={selectedBlog} onClose={closeSidebar} />
      )}
    </div>
  );
};

export default BlogsSection;
