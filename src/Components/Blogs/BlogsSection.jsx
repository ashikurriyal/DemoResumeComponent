import { useState } from 'react';
import BlogsCard from "./BlogsCard";

const BlogsSection = () => {
    const [sortBy, setSortBy] = useState("newest");

    const blogs = [
        {
            title: "React & Tailwind CSS Developer for Feature Implementation",
            shortDescription: "The new design already exists in Figma. Animations are already implemented but have to be extended into the new elements.",
            tags: ["React", "Tailwind CSS", "JavaScript"],
            datePosted: "2023-09-25",
            experienceLevel: "Intermediate",
            jobType: "Hourly",
            priceRange: "$12.00 - $29.00/hr"
        },
        {
            title: "UI Developer with Expertise in React & React Native",
            shortDescription: "We are looking for an experienced UI Developer proficient in React and React Native to improve our eCommerce platform.",
            tags: ["React", "React Native", "JavaScript"],
            datePosted: "2023-09-23",
            experienceLevel: "Expert",
            jobType: "Fixed-Price",
            priceRange: "$500 - $1K"
        }
    ];

    const sortedBlogs = [...blogs].sort((a, b) => {
        return sortBy === "newest" ? new Date(b.datePosted) - new Date(a.datePosted) : new Date(a.datePosted) - new Date(b.datePosted);
    });

    return (
        <div className="container mx-auto grid grid-cols-4 gap-6">
            {/* Left Sidebar */}
            <div className="col-span-1 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Filters</h2>
                <div>
                    <label className="block text-gray-700">Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border rounded px-3 py-2 w-full"
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
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
    );
};

export default BlogsSection;
