import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('mario');
const [isPending, setIsPending] = useState(false);
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('new blog added');
        setIsPending(false);
        navigate('/');
    });
}

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="Pari">Pari</option>
                </select>
            { !isPending && <button>Add Blog</button>}
            { isPending && <button disabled>Adding Blog...</button>}
            </form>
            {/* <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p> */}
        </div>
     );
}
 
export default Create;