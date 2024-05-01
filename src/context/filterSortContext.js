import React, { useState, useEffect, createContext } from "react";
import jsonData from "../db/shopData.json";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  // Json Data Fetch
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  // Sorting Products
  useEffect(() => {
    const sortedProducts = [...jsonData.glasses].sort(
      (a, b) => b.sellingQuantity - a.sellingQuantity
    );
    setProducts(sortedProducts);
    setFilteredProducts(sortedProducts);
  }, []);

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    if (sortBy === "selling_quantity") {
      const sortedProducts = [...jsonData.glasses].sort(
        (a, b) => b.sellingQuantity - a.sellingQuantity
      );
      setProducts(sortedProducts);
    } else if (sortBy === "low_price") {
      const sortedPriceLowHigh = [...products].sort(
        (a, b) => a.salePrice - b.salePrice
      );
      setProducts(sortedPriceLowHigh);
    } else if (sortBy === "high_price") {
      const sortedPriceHighLow = [...products].sort(
        (a, b) => b.salePrice - a.salePrice
      );
      setProducts(sortedPriceHighLow);
    } else if (sortBy === "created") {
      const sortedNewProducts = [...products].sort(
        (a, b) => new Date(b.created) - new Date(a.created)
      );
      setProducts(sortedNewProducts);
    } else if (sortBy === "discount") {
      const sortedDiscount = [...products].sort(
        (a, b) => b.discount - a.discount
      );
      setProducts(sortedDiscount);
    } else if (sortBy === "viewed") {
      const sortedViewed = [...products].sort((a, b) => b.viewed - a.viewed);
      setProducts(sortedViewed);
    } else if (sortBy === "rating") {
      const sortedRating = [...products].sort((a, b) => b.rating - a.rating);
      setProducts(sortedRating);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([]);

  let priceRangesArray = [
    { min: 0, max: 49 },
    { min: 50, max: 99 },
    { min: 100, max: 149 },
    { min: 150, max: 199 },
    { min: 200, max: 249 },
    { min: 250, max: 299 },
  ];

  const isPriceInRange = (product, range) => {
    if (!range) {
      return false;
    }
    const { min, max } = range;
    return product.salePrice >= min && product.salePrice <= max;
  };

  useEffect(() => {
    if (Object.values(checkedItems).some((value) => value === true)) {
      const filtered = products.filter((product) => {
        const checkedItemsMatch =
          checkedItems[product.gender] ||
          checkedItems[product.frameColor] ||
          checkedItems[product.frameSize] ||
          checkedItems[product.brand];

        return checkedItemsMatch;
      });
      setFilteredProducts(filtered);
    } else if (selectedCategory !== null) {
      const categoryProducts = products.filter(
        (product) => product.type === selectedCategory
      );
      setFilteredProducts(categoryProducts);
    } else if (priceRange !== null && priceRange.length > 0) {
      console.log("selected price range:", priceRange);
      const filteredByPriceRange = products.filter((product) =>
        priceRange.some((range) => isPriceInRange(product, range))
      );
      console.log("filtered price range:", filteredByPriceRange);
      setFilteredProducts(filteredByPriceRange);
    } else {
      setFilteredProducts(products);
    }
  }, [checkedItems, products, selectedCategory, priceRange]);

  const handleCheckBox = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  const handlePriceRangeCheckBox = (index) => {
    setPriceRange((prevRanges) => {
      const updatedRanges = prevRanges ? [...prevRanges] : [];
      updatedRanges[index] = {
        ...priceRangesArray[index],
        checked: !updatedRanges[index]?.checked,
      };
      const checkedRanges = updatedRanges.filter((range) => range.checked);
      return checkedRanges.length > 0 ? checkedRanges : null;
    });
  };

  const handleTypeFilter = (type) => {
    setSelectedCategory(type);
  };

  const handleRemoveTypeFilter = () => {
    setSelectedCategory(null);
  };  

  const handleRemoveFilter = (filterName) => {
    const updatedCheckedItems = { ...checkedItems };
    updatedCheckedItems[filterName] = false;
    setCheckedItems(updatedCheckedItems);
  };

  const handleRemovePriceRange = (index) => {
    console.log("index", index);
  };
  

  // Pagination
  const [currentData, setCurrentData] = useState(1);
  const [perPageData, setPerPageData] = useState(18);
  const lastIndex = perPageData * currentData;
  const firstIndex = lastIndex - perPageData;
  const paginationData = filteredProducts.slice(firstIndex, lastIndex);

  // Search Brand
  const [searchQuery, setSearchQuery] = useState("");
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchFilteredData = paginationData.filter((product) => {
    const search = searchQuery?.trim()?.toLowerCase();
    return product?.brand?.trim()?.toLowerCase()?.includes(search);
  });

  return (
    <FilterContext.Provider
      value={{
        //Sort
        handleSortChange,
        products,
        checkedItems,
        filteredProducts,
        handleRemoveFilter,
        handleRemovePriceRange,
        handleRemoveTypeFilter,

        // Filter
        handleCheckBox,
        handlePriceRangeCheckBox,
        handleTypeFilter,
        priceRangesArray,
        priceRange,
        selectedCategory,

        //Pagination
        currentData,
        setCurrentData,
        perPageData,
        setPerPageData,

        // Search
        searchQuery,
        handleInputChange,
        searchFilteredData,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
