const BlogsCard = ({ title, shortDescription, tags, datePosted, experienceLevel, jobType, priceRange }) => {
    return (
        <div className="border p-4 mb-4 rounded-lg shadow-lg hover:border-2 hover:border-green-500">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">{title}</h1>
                <p className="text-gray-500 text-sm">{datePosted}</p>
            </div>
            <p className="text-gray-700 mb-2">{shortDescription}</p>
            <div className="flex space-x-2 mb-2">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-green-50 text-xs px-3 py-2 text-green-500 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="flex justify-between items-center text-gray-500 text-sm">

                <p>{experienceLevel} - {jobType}</p>
                <p className="text-green-500">{priceRange}</p>
            </div>
        </div>
    );
};

export default BlogsCard;
