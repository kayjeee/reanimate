import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsArrowRight } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './NavbarDetails';

const Details = () => {
  const data = useSelector((store) => store.anime.anime);
  const isLoading = useSelector((store) => store.anime.loading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const listItems = [
    { label: 'Episodes count', value: data.episodeCount },
    { label: 'Episode length', value: data.episodeLength },
    { label: 'Date of creation', value: data.createdAt?.slice(0, 7) || 'N/A' },
    { label: 'Type', value: data.showType },
    { label: 'First appearance', value: data.tba || 'N/A' },
    { label: 'Total length', value: data.totalLength },
    { label: 'Subtype', value: data.subtype },
  ];

  return (
    <div>
      <Navbar />
      <Container>
        <Row className="justify-content-between align-items-center pl-2 pt-2 pb-2 pr-8 bg-white text-black">
          {data.posterImage?.tiny && (
            <Col xs={12} md={4} className="text-center">
              <img src={data.posterImage?.tiny} alt={data.canonicalTitle} className="w-32 border-black border-4 rounded" />
            </Col>
          )}
          <Col xs={12} md={8} className="text-right">
            <p className="font-bold text-2xl uppercase">{data.canonicalTitle}</p>
            <p className="font-semibold text-lg d-flex align-items-center gap-1">
              {data.popularityRank}
              <span className="text-sm">rank</span>
            </p>
          </Col>
        </Row>
        <p className="pl-2 pt-1 pb-1 text-black bg-white">Check more details - 2023</p>
        <ul className="bg-white text-black">
          {listItems.map((item) => (
            <li
              key={item.label}
              className={`h-32 flex justify-between items-center pl-2 pr-2 text-lg ${listItems.indexOf(item) % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}`}
            >
              <p>{item.label}</p>
              <p className="flex gap-4">
                <p className="flex gap-1">
                  {item.value}
                  <span>{listItems.indexOf(item) === 1 ? 'minutes' : 'episodes'}</span>
                </p>
                <Link to="/" className="top-2 left-38 p-1 border-2 border-black text-black rounded-full">
                  <BsArrowRight className="h-5 w-5" />
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </Container>
      <footer className="text-black h-16 bg-white d-flex gap-1 items-center justify-center">
        Built by
        {' '}
        <a href="https://www.linkedin.com/in/kagiso-sebogodi/" className="underline text-black">
          kagiso
        </a>
        {' '}
        & Designed by
        {' '}
        <a href="https://www.behance.net/sakwadesignstudio" className="underline text-black">
          Nelson Sakwa
        </a>
      </footer>
    </div>
  );
};

export default Details;
