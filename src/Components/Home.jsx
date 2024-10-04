import BlogsSection from "./Blogs/BlogsSection";
// import JobDetails from "./Blogs/JobDetails";


const Home = () => {
    return (
        <div>
            <div className="lg:mx-32 mx-6 space-y-20">
                <BlogsSection></BlogsSection>
                {/* <JobDetails></JobDetails> */}
            </div>
        </div>
    );
};

export default Home;