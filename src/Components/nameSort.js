// nameSort.js

// Function to sort products by name A to Z
export const sortNameAToZ = (products) => {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
  };
  
  // Function to sort products by name Z to A
  export const sortNameZToA = (products) => {
    return [...products].sort((a, b) => b.name.localeCompare(a.name));
  };
  