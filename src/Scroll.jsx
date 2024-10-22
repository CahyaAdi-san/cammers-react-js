import React, { useRef } from 'react';
import Heroes from './Heroes';
import Data from './Data';

const Scroll = () => {
  const productRef = useRef(null);

  const scrollToProduct = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Heroes scrollToProduct={scrollToProduct} />
      <Data ref={productRef} />
    </div>
  );
};

export default Scroll;
