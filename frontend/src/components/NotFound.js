import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <p>404 Not found</p>
            <Link to="/"> Go Home</Link>
        </div>
    );
}

export default NotFound;