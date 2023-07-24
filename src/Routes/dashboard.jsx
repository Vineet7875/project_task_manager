import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "../Navbar/Navbar";
import Cards from "../DashboardCards/cards";
import DiaglogBox from "../DiaglogBox/DiaglogBox";
function Dashboard() {
    return (
        <Router>
            <Nav />
            <Routes>
                <>
                    <Route path="/" element={
                        <>
                            <Cards />
                        </>
                    }

                    />
                </>
            </Routes>
            <Routes>
                <>
                    <Route path="/DiaglogBox" element={
                        <>
                            <DiaglogBox />
                        </>
                    }

                    />
                </>
            </Routes>
        </Router>
    );
}

export default Dashboard;
