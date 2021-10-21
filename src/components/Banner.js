import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "../axios";
import "../styles/Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
            className="header"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "cover cover",
                backgroundSize: "cover",
            }}
        >
            <div className="content">
                <div className="title">
                    <h1>{movie?.title || movie?.name || movie?.original}</h1>
                </div>

                <div className="buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>

                <h1 className="description">{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className="faded_btn"></div>
        </header>
    );
}

export default Banner;
