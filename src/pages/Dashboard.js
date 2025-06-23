import { link } from 'react-router-dom';

function Dashboard() {
    return(
        <div className="container text-center">
            <h1>User Dashboard Pages</h1>
            <Link to="/logout">Logout</Link>
        </div>
    );
}

export default Dashboard;