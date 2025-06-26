import BlogList from "./BlogList";
import useFetch from "./usefetch";

const BACKEND_URL = 'https://swissblog-backend.onrender.com'; // Replace with your actual Render URL

const Home = () => {
    const { data: blogs, isPending, error } = useFetch(`${BACKEND_URL}/blogs`);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
};


export default Home;