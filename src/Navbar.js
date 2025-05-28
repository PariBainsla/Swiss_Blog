const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The Swiss Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#026868',
                    borderRadius: '10px',
                    padding: '7px 11px'
                }} >New Blog</a>
            </div>
        </div>
     );
}
 
export default Navbar;