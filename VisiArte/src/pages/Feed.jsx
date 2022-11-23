import React from "react";
import Header from "../components/plataforma/reutilizavel/header/Header";
import ConteudoFeed from "../components/plataforma/feed/ConteudoFeed";
import GETfeed from "../data/GET_feed.json";

function Feed() {
    return (
        <div className="container-plataforma">
            <Header />
            <ConteudoFeed data={GETfeed} />
        </div>
    );
}

export default Feed;
