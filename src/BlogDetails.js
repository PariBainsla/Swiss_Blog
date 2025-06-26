import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {
    const { id } = useParams();

    const BACKEND_URL = 'https://swissblog-backend.onrender.com'; // 🔁 Replace this with actual Render URL

    const { data: blog, error, isPending } = useFetch(`${BACKEND_URL}/blogs/${id}`);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch(`${BACKEND_URL}/blogs/${blog.id}`, {
            method: 'DELETE'
        }).then(() => {
            console.log('Blog deleted');
            navigate('/');
        });
    };
    
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <h3>Written by {blog.author}</h3>
                    <div>{blog.body}</div>
                    <h4>Blog Details - {id}</h4>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;