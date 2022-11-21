import React from "react";
import Header from "../components/plataforma/reutilizavel/header/Header";
import ConteudoFeed from "../components/plataforma/feed/ConteudoFeed";

function Feed() {
    return (
        <div className="container-plataforma">
            <Header />
            <ConteudoFeed />
        </div>
    );
}

export default Feed;
