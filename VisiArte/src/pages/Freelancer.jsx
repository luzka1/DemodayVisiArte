
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Header from "../components/plataforma/reutilizavel/header/Header";
import Entrada from "../components/Freelancer/Entrada/Entrada";
import Categorias from "../components/Freelancer/Categorias/Categorias";
import Footer from "../components/landingpage/footer/Footer";

function Freelancer() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <div >
            <Header />
            <Entrada />
            <Categorias />
            <Footer />
        </div>
    );
}

export default Freelancer;
