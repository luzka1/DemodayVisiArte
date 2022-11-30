// import "./css/App.css";
import Header from "../components/landingpage/header/Header";
import Entrada from "../components/landingpage/entrada/Entrada";
import SliderPrin from "../components/landingpage/sliderPrin/SliderPrin";
import ComoFunc from "../components/landingpage/comoFunc/ComoFunc";
import SobreNos from "../components/landingpage/sobreNos/SobreNos";
import TodaParte from "../components/landingpage/todaParte/TodaParte";
import APlataforma from "../components/landingpage/aPlataforma/APlataforma";
import Comentarios from "../components/landingpage/comentarios/Comentarios";
import Footer from "../components/landingpage/footer/Footer";
import { motion, useInView } from "framer-motion";
<<<<<<< HEAD
import { useRef } from "react";
import Vlibras from "../components/Vlibras/Vlibras"
=======
import { useRef} from "react";
>>>>>>> fc60c7b508838115b2d8dc324634b018afb97df3

function LandingPage() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
<<<<<<< HEAD
        <div className="ContainerLandingPage">
            <Vlibras />
=======
        <div className="ContainerLandingPage">          
>>>>>>> fc60c7b508838115b2d8dc324634b018afb97df3
            <Header />
            <Entrada />
            <SliderPrin />
            <ComoFunc />
            <SobreNos />

            <motion.div
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateY(10vh)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <TodaParte />
            </motion.div>
            
            <APlataforma />
            <Comentarios />
            <Footer />
        </div>
    );
}

export default LandingPage;
