const BlogsCard = ({ title, shortDescription, tags, datePosted, experienceLevel, jobType, priceRange }) => {
    return (
        <div className="border p-4 mb-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="text-gray-500 text-sm">{datePosted}</p>
            </div>
            <p className="text-gray-700 mb-2">{shortDescription}</p>
            <div className="flex space-x-2 mb-2">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="flex justify-between items-center text-gray-500 text-sm">
                <p>{experienceLevel} - {jobType}</p>
                <p>{priceRange}</p>
            </div>
        </div>
    );
};

export default BlogsCard;
