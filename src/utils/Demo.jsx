import React, { useState, useEffect } from 'react';

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const displayTime = 10000; // time in milliseconds

  const cards = [
    // Add your card content here as objects or components
    { id: 1, content: 'Card 1' },
    { id: 2, content: 'Card 2' },
    { id: 3, content: 'Card 3' },
    // Add more cards as needed
  ];

  useEffect(() => {
    const showNextCard = () => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const interval = setInterval(showNextCard, displayTime);

    return () => clearInterval(interval);
  }, [cards.length]);

  const handleVideoEnd = () => {
    setCurrentCardIndex(0);
  };

  const handleNavbarToggle = () => {
    document.querySelector('.navbar-menu').classList.toggle('active');
  };

  return (
    <div>
      <video
        id="background-video"
        onEnded={handleVideoEnd}
        autoPlay
        muted
        loop
      >
        <source src="path/to/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button id="navbar-toggle" onClick={handleNavbarToggle}>
        Toggle Navbar
      </button>
      <div className="navbar-menu">
        {/* Navbar content */}
      </div>

      <div className="cards">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${index === currentCardIndex ? 'show' : 'hide'}`}
          >
            {card.content}
          </div>
        ))}
      </div>

      <style jsx>{`
        .card {
          display: none;
        }
        .card.show {
          display: block;
        }
        .card.hide {
          display: none;
        }
        .navbar-menu {
          display: none;
        }
        .navbar-menu.active {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default App;
