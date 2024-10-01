import { Link } from "react-router-dom";

const BlogsCard = ({ blog }) => {
  const { blogId, title, shortDescription, tags, datePosted, experienceLevel, jobType, priceRange } = blog; // No need to change

  return (
    <Link to={`/blog/${blogId}`}> {/* Fix the template literal syntax here */}
      <div className="border p-4 mb-4 rounded-lg shadow-lg hover:border-2 hover:border-green-500">
        {/* Container for title and date, with responsive flex behavior */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">{datePosted}</p>
        </div>

        {/* Description with responsive text sizing */}
        <p className="text-gray-700 text-sm md:text-base mb-2">{shortDescription}</p>

        {/* Tags section, wrapped responsively */}
        <div className="flex flex-wrap space-x-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-50 text-xs px-3 py-2 text-green-500 rounded-full mb-2"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Experience level, job type, and price range with responsive text alignment */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-gray-500 text-sm">
          <p>{experienceLevel} - {jobType}</p>
          <p className="text-green-500 mt-2 md:mt-0">{priceRange}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogsCard;
