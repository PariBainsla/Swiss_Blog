import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The Swiss Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#b22a6b',
                    borderRadius: '10px',
                    padding: '7px 11px'
                }} >New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;