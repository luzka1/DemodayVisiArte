import React from "react";
import Header from "../components/plataforma/reutilizavel/header/Header";
import ConteudoFeed from "../components/plataforma/feed/ConteudoFeed";
import GETfeed from "../data/GET_feed.json";

function Feed() {
    return (
        <>
            <Header />
            <ConteudoFeed data={GETfeed} />
        </>
    );
}

export default Feed;
