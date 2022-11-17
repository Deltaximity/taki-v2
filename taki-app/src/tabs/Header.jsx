import { Component } from "react";
import { Routes, Route } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <Routes>
                    <Route path="/" element={<h1>Welcome</h1>}></Route>
                    <Route path="/checklist" element={<h1>Checklist</h1>}></Route>
                    <Route path="/countdowns" element={<h1>Countdowns</h1>}></Route>
                    <Route path="/focus" element={<h1>Focus Timer</h1>}></Route>
                    <Route path="/stopwatch" element={<h1>Stopwatch</h1>}></Route>
                    <Route path="/notes" element={<h1>Notes</h1>}></Route>
                </Routes>
            </header>
        )
    }
}

export default Header;