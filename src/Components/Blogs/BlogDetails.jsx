import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blog = useLoaderData(); // This fetches the data passed by the route loader

  const { title, datePosted, shortDescription, experienceLevel, jobType, priceRange, content } = blog;
  console.log(blog)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-500 mb-4">{datePosted}</p>
      <p className="text-lg text-gray-700 mb-4">{shortDescription}</p>

      <div className="mb-4">
        <strong>Experience Level:</strong> {experienceLevel}
      </div>
      <div className="mb-4">
        <strong>Job Type:</strong> {jobType}
      </div>
      <div className="mb-4">
        <strong>Price Range:</strong> {priceRange}
      </div>

      <div className="flex flex-wrap space-x-2 mb-4">
      {/* {tags.map((tag) => (
            <span
              key={blog.tags.blogId}
              className="bg-green-50 text-xs px-3 py-2 text-green-500 rounded-full mb-2"
            >
              {tag}
            </span>
          ))} */}
      </div>

      <div className="text-gray-700">{content}</div>
    </div>
  );
};

export default BlogDetails;
