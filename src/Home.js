import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My lovely nature", body: 'lorem ipsum ....', author: 'mario', id: 1 },
        { title: 'welcome party', body: 'lorem ipsum ....', author: 'mario23', id: 2 },
        { title: 'web dev top    ', body: 'lorem ipsum ....', author: 'mario3', id: 3 },
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
        </div>
    );
}

export default Home;