import React, { useState } from 'react';
import categories from './data/Category';
import ProductData from './data/ProductData';
import './ProductDisplay.css';
import { sortProductsByPrice, sortProductsByName } from './sortingFunctions';
import SearchBar from './SearchBar';

const ProductDisplay = () => {
  const [sortedProducts, setSortedProducts] = useState([...ProductData]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSortBy, setSelectedSortBy] = useState({ price: null, name: null });
  const [searchQuery, setSearchQuery] = useState('');

  // Tìm theo giá
  const handleSortByPrice = (order) => {
    let sorted;
    if (order === 'unsorted') {
      sorted = [...ProductData];
      setSelectedSortBy(prevState => ({ ...prevState, price: null }));
    } else {
      sorted = sortProductsByPrice([...sortedProducts], order);
      setSelectedSortBy(prevState => ({ ...prevState, price: order }));
    }
    setSortedProducts(sorted);
  };

  // Tìm theo tên
  const handleSortByName = (order) => {
    let sorted;
    if (order === 'unsorted') {
      sorted = [...ProductData];
      setSelectedSortBy(prevState => ({ ...prevState, name: null }));
    } else {
      sorted = sortProductsByName([...sortedProducts], order);
      setSelectedSortBy(prevState => ({ ...prevState, name: order }));
    }
    setSortedProducts(sorted);
  };

  // Phân loại sản phẩm
  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Lọc
  const filteredProducts = sortedProducts.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getSortLabelMessage = (sortType, order) => {
    if (sortType === 'price') {
      return order === 'lowToHigh' ? 'Sort by Price: Low to High' :
             order === 'highToLow' ? 'Sort by Price: High to Low' : 'Sort by Price';
    }
    if (sortType === 'name') {
      return order === 'aToZ' ? 'Sort by Name: A to Z' :
             order === 'zToA' ? 'Sort by Name: Z to A' : 'Sort by Name';
    }
    return '';
  };

  return (
    <div className="product-display-container">
      <div className="category-tabs">
        {categories.map((category, index) => (
          <div
            className={`category-tab ${category === selectedCategory ? 'active' : ''}`}
            key={index}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="sorting-bar">
        <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
        <div className="sort-options">
          <div className="sort-option">
            <label className={selectedSortBy.price ? 'active' : ''}>
              {getSortLabelMessage('price', selectedSortBy.price)}
            </label>
            <div className="sort-select">
              <div
                className={selectedSortBy.price === 'lowToHigh' ? 'active' : ''}
                onClick={() => handleSortByPrice('lowToHigh')}
              >
                Low to High
              </div>
              <div
                className={selectedSortBy.price === 'highToLow' ? 'active' : ''}
                onClick={() => handleSortByPrice('highToLow')}
              >
                High to Low
              </div>
              <div
                className={selectedSortBy.price === null ? 'active' : ''}
                onClick={() => handleSortByPrice('unsorted')}
              >
                Unsorted
              </div>
            </div>
          </div>
          <div className="sort-option">
            <label className={selectedSortBy.name ? 'active' : ''}>
              {getSortLabelMessage('name', selectedSortBy.name)}
            </label>
            <div className="sort-select">
              <div
                className={selectedSortBy.name === 'aToZ' ? 'active' : ''}
                onClick={() => handleSortByName('aToZ')}
              >
                A to Z
              </div>
              <div
                className={selectedSortBy.name === 'zToA' ? 'active' : ''}
                onClick={() => handleSortByName('zToA')}
              >
                Z to A
              </div>
              <div
                className={selectedSortBy.name === null ? 'active' : ''}
                onClick={() => handleSortByName('unsorted')}
              >
                Unsorted
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div className="product-item" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDisplay;
