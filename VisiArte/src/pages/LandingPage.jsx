// import "./css/App.css";
import Header from "../components/landingpage/Header";
import Entrada from "../components/landingpage/Entrada";
import SliderPrin from "../components/landingpage/SliderPrin";
import ComoFunc from "../components/landingpage/ComoFunc";
import SobreNos from "../components/landingpage/SobreNos";
import TodaParte from "../components/landingpage/TodaParte";
import APlataforma from "../components/landingpage/APlataforma";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function LandingPage() {
    return (
        <div className="ContainerLandingPage">
            <Header />
            <Entrada />
            <SliderPrin />
            <ComoFunc />
            <SobreNos />
            <TodaParte />
            <APlataforma />
        </div>
    );
}

export default LandingPage;
