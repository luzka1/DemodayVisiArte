import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// PAGINAS -------------------------------

import LandingPage from "./pages/LandingPage";
import Feed from "./pages/Feed";

// -------------------------------

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
