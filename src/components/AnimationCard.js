import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '@material-tailwind/react';
import { fetchAnime, fetchAnimeById } from '../redux/anime/AnimeSlice';
import '../App.css';
import Navbar from './Navbar';

const AnimeCard = () => {
  const dispatch = useDispatch();
  const animeList = useSelector((store) => store.anime.animeList);
  const isitLoading = useSelector((store) => store.anime.loading);

  useEffect(() => {
    dispatch(fetchAnime('Adventure,Historical'));
  }, [dispatch]);

  const categories = [
    'Action',
    'Military',
    'Comedy',
    'Drama',
    'Fantasy',
    'Music',
    'Horror',
    'Kids',
    'Martial Arts',
    'Adventure',
    'Historical',
    'Mystery',
  ];

  // Shuffle the categories randomly
  const shuffledCategories = categories.sort(() => Math.random() - 0.5);

  if (isitLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Spinner className="h-12 w-12 text-sky-700" />
      </div>
    );
  }

  return (
    <div className="font-gill bg-gray-200">
      <div className="fade-in-bg">
        <Navbar />
      </div>
      <div className="container">
        <div className="p-4 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-6 text-black">
          {shuffledCategories.map((category) => (
            <button
              className="p-1 border-2 border-black ease-in rounded-md bg-gray-200 hover:text-sky-700 hover:bg-sky-800"
              type="button"
              key={category}
              onClick={() => {
                dispatch(fetchAnime(category));
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <span className="text-black p-1 font-lato">Animation movie by Category</span>
        <div className="row">
          {animeList.map((anime) => (
            <div className="col-6" key={anime.id}>
              <div className="card position-relative bg-gray-100">
                <Link
                  to="Details"
                  className="btn btn-primary rounded-circle position-absolute top-0 end-0 mt-2 me-2 bg-gray-500"
                  onClick={() => dispatch(fetchAnimeById(anime.id))}
                >
                  <BsArrowRight className="h-5 w-5" style={{ color: 'black' }} />
                </Link>
                <img src={anime.posterImage.tiny} alt={anime.canonicalTitle} className="card-img-top" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="text-end">
                    <h5 className="card-title">{anime.canonicalTitle.slice(0, 7)}</h5>
                    <span className="card-text">{anime.popularityRank}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="text-sky-700 h-16 bg-white flex gap-1 items-center justify-center">
        Built by
        {' '}
        <span href="https://www.linkedin.com/in/kagiso-sebogodi/" className="underline text-sky-500">
          Kagiso Sebogodi aka Kayjee Legendary
        </span>
        {' '}
        & Designed by
        {' '}
        <span href="https://www.behance.net/sakwadesignstudio" className="underline text-sky-500">
          Nelson Sakwa
        </span>
      </footer>
    </div>
  );
};

export default AnimeCard;
