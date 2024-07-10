// sortingFunctions.js

export const sortProductsByPrice = (products, order) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (order === 'lowToHigh') {
        return a.price - b.price;
      } else if (order === 'highToLow') {
        return b.price - a.price;
      }
      return 0;
    });
    return sortedProducts;
  };
  
  export const sortProductsByName = (products, order) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (order === 'aToZ') {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      } else if (order === 'zToA') {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      }
      return 0;
    });
    return sortedProducts;
  };
  