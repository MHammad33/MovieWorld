import React, { useEffect, useState } from 'react';
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';


// API key = ec1faa20
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=ec1faa20';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const completeURL = API_URL + "&s=" + title
        const response = await fetch(completeURL)
        const data = await response.json();

        setMovies(data.Search);

    }
    console.log(movies);

    useEffect(() => {
        searchMovies("spiderman");
    }, [searchTerm]);





    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>


            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <div>
                                    <MovieCard movie={movie} />
                                </div>
                            ))}
                        </div>
                    ) :
                    (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )

            }

        </div>
    );
}

export default App;