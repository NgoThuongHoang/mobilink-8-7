import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp as faArrowUpSolid } from '@fortawesome/free-solid-svg-icons';
import './ScrollButton.css';

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) { // Điều kiện cuộn xuống
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className={`scroll-button ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
     <FontAwesomeIcon icon={faArrowUpSolid} />
    </button>
  );
}

export default ScrollButton;
