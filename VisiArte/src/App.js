import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";

// PAGINAS -------------------------------

import LandingPage from "./pages/LandingPage";

// -------------------------------

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota para a landing page */}
                <Route path="/" element={<LandingPage />} />
                {/* ------------------------ */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
