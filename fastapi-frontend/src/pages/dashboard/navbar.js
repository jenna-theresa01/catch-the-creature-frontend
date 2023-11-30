export default function NavBar() {

    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" href="/creatures">Creatures</a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Bugs</a></li>
                    <li><a className="dropdown-item" href="#">Deep Sea Creatures</a></li>
                    <li><a className="dropdown-item" href="#">Fish</a></li>
                    <li><a className="dropdown-item" href="#">Tracker</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/events">Events</a>
                </li>
                <li className="nav-item dropdown">
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Forum</a></li>
                        <li><a className="dropdown-item" href="#">FAQs</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
