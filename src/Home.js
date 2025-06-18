import { Link } from "react-router-dom";

function Home() {
    return (
        <div class="container-fluid text-center">
            <h1>Welcom to MERN projects</h1>

            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

export { Home };