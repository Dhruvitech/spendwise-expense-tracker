import React from "react";
import { BrowserRouter,Routes, Route} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import History from "./pages/History";
import Sidebar from "./components/Sidebar";


function App(){
    return(
        <BrowserRouter>
            <div style={{ display: "flex"}}>
                <Sidebar />
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/add-expense" element={<AddExpense />} />
                        <Route path="/history" element={<History />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
           