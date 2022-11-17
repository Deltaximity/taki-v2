import { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div id="menu">
                <div id="logo">TAKi</div>
                <div className="menu-links">
                    <Link to={'/'} className="links">Overview</Link>
                    <Link to={'/checklist'} className="links">Checklist</Link>
                    <Link to={'/countdowns'} className="links">Countdowns</Link>
                    <Link to={'/focus'} className="links">Focus Timer</Link>
                    <Link to={'/stopwatch'} className="links">Stopwatch</Link>
                    <Link to={'/notes'} className="links">Notes</Link>
                </div>
                <div className="settings"></div>
            </div>
        )
    }
}

export default Menu;