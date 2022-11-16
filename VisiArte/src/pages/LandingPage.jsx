// import "./css/App.css";
import Header from "../components/landingpage/header/Header";
import Entrada from "../components/landingpage/entrada/Entrada";
import SliderPrin from "../components/landingpage/sliderPrin/SliderPrin";
import ComoFunc from "../components/landingpage/comoFunc/ComoFunc";
import SobreNos from "../components/landingpage/sobreNos/SobreNos";
import TodaParte from "../components/landingpage/todaParte/TodaParte";
import APlataforma from "../components/landingpage/aPlataforma/APlataforma";
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
