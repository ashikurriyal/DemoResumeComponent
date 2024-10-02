
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blog = useLoaderData(); // Fetches data passed by the route loader

  const {
    title,
    datePosted,
    shortDescription,
    experienceLevel,
    jobType,
    priceRange,
    content,
    tags,
  } = blog;

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
        {title}
      </h1>

      {/* Date Posted */}
      <p className="text-center text-gray-500 mb-4">{datePosted}</p>

      {/* Short Description */}
      <p className="text-lg text-gray-700 mb-4 text-center">
        {shortDescription}
      </p>

      {/* Experience Level, Job Type, Price Range */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <strong className="block font-semibold text-gray-800">
            Experience Level:
          </strong>
          <span className="text-gray-600">{experienceLevel}</span>
        </div>
        <div className="text-center">
          <strong className="block font-semibold text-gray-800">Job Type:</strong>
          <span className="text-gray-600">{jobType}</span>
        </div>
        <div className="text-center">
          <strong className="block font-semibold text-gray-800">
            Price Range:
          </strong>
          <span className="text-gray-600">{priceRange}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex justify-center space-x-3 mb-6">
        {tags &&
          tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 text-xs font-semibold px-4 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
      </div>

      {/* Content */}
      <div className="text-gray-700 text-left border-t pt-4">{content}</div>

      {/* Footer */}
      <div className="text-center mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
