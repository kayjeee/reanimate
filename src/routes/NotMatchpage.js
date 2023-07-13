import React from 'react';

const NotMatchpage = () => {
  const errorMessages = [
    "Oops! The page you're looking for doesn't exist.",
    '404 Error: Page Not Found',
    'Sorry, but this page seems to be lost.',
    'Looks like you took a wrong turn.',
    'This page is nowhere to be found.',
  ];

  const randomImageUrls = [
    'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1689197837~exp=1689198437~hmac=c851352261432c4def5aaa11c5ce79d4bd56f4890973a6406d113bf9416e17fc',
    'https://img.freepik.com/free-vector/flat-404-error-template_23-2147741200.jpg?w=740&t=st=1689197758~exp=1689198358~hmac=f06f7decb885b16d5dc001695dd51e11b03f2a2cf5b77045020b2f64a2119a54',
  ];

  const randomErrorMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
  const randomImageUrl = randomImageUrls[Math.floor(Math.random() * randomImageUrls.length)];

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{randomErrorMessage}</h1>
      <img src={randomImageUrl} alt="Error" className="max-w-full h-auto" />
    </div>
  );
};

export default NotMatchpage;
