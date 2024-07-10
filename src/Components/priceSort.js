// priceSort.js

// Function to sort products by price from low to high
export const sortPriceLowToHigh = (products) => {
    return [...products].sort((a, b) => a.price - b.price);
  };
  
  // Function to sort products by price from high to low
  export const sortPriceHighToLow = (products) => {
    return [...products].sort((a, b) => b.price - a.price);
  };
  