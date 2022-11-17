import { Component } from "react";
import { Routes, Route } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <main>
                <Routes>
                    <Route path='/' element={<div>Overview</div>} ></Route>
                    <Route path='/checklist' element={<div>Checklist</div>} ></Route>
                    <Route path='/countdowns' element={<div>Countdowns</div>} ></Route>
                    <Route path='/focus' element={<div>Focus</div>} ></Route>
                    <Route path='/stopwatch' element={<div>Stopwatch</div>} ></Route>
                    <Route path='/notes' element={<div>Notes</div>} ></Route>
                </Routes>
            </main>
        )
    }
}

export default Main;