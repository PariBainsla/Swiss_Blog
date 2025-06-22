import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
      <h1>404</h1>
      <h2>Oops! Page not found 😢</h2>
      <p>The page you're looking for doesn’t exist or was moved.</p>
      <Link to="/">Go back to Home 🏠</Link>
    </div>
     );
}
 
export default NotFound;