import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import Header from "./Header";
import ProductItem from "./ProductItem";
import FiltersGroup from "./FiltersGroup";
import Footer from "./Footer";
import "../styles/Products.css";
import fourStar from "../assets/fourStar.png";
import threeStar from "../assets/threeStar.png";
import twoStar from "../assets/twoStar.png";
import oneStar from "../assets/oneStar.png";
import failureImg from "../assets/failureImg.png";
import axiosapp from "../utils/axiosapp";
import Profile from "./Profile";
import { toast } from "react-toastify";

const categoryOptions = [
  { name: "All Products", categoryId: "all" },
  { name: "Men's Clothing", categoryId: "men's clothing" },
  { name: "Women's clothing", categoryId: "women's clothing" },
  { name: "Electronics", categoryId: "electronics" },
  { name: "Jewelery", categoryId: "jewelery" },
];

const sortbyOptions = [
  { optionId: "", displayText: "Select Sorting" },
  { optionId: "PRICE_HIGH", displayText: "Price (High-Low)" },
  { optionId: "PRICE_LOW", displayText: "Price (Low-High)" },
];

const ratingsList = [
  { ratingId: "4", imageUrl: fourStar },
  { ratingId: "3", imageUrl: threeStar },
  { ratingId: "2", imageUrl: twoStar },
  { ratingId: "1", imageUrl: oneStar },
];

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [activeRatingId, setActiveRatingId] = useState("");
  const [activeSortId, setActiveSortId] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const getUserInfo = useCallback(async () => {
    try {
      const response = await axiosapp.get("/get-user");
      const user = response.data?.user;
      if (!user) throw new Error("Unauthorized");
      setUserInfo(user);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.clear();
        navigate("/login");
      } else {
        console.error("Error occurred:", error.message);
      }
    }
  }, [navigate]);

  const getProductsData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      const updated = data.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        image: item.image,
        rating: item.rating,
        category: item.category,
      }));
      setProductsData(updated);
      setHasError(false);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserInfo();
    getProductsData();
  }, [getUserInfo, getProductsData]);

  const onLogout = () => {
    localStorage.clear();
    toast.success("Logout Successful!");
    navigate("/login");
  };

  const handleRetry = () => {
    getProductsData();
  };

  const applyFilters = () => {
    let filtered = productsData.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchInput.toLowerCase());

      const matchesCategory =
        activeCategoryId === "all" ||
        product.category.toLowerCase().includes(activeCategoryId.toLowerCase());

      const matchesRating =
        activeRatingId === "" ||
        Math.floor(product.rating.rate) >= parseInt(activeRatingId);

      return matchesSearch && matchesCategory && matchesRating;
    });

    if (activeSortId === "PRICE_HIGH") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (activeSortId === "PRICE_LOW") {
      filtered.sort((a, b) => a.price - b.price);
    }

    return filtered;
  };

  const filteredProducts = applyFilters();

  const renderFailureView = () => (
    <div className="failure-view">
      <img src={failureImg} alt="failure view" className="failure-image" />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button" className="retry-button" onClick={handleRetry}>
        Retry
      </button>
    </div>
  );

  return (
    <>
      <Header />
      <div className="products-container">
        <div className="products-page">
          <Profile userInfo={userInfo} onLogout={onLogout} />
          <h1 className="main-heading">Products Listing Page</h1>
          <div className="products-content">
            <h2 className="sub-heading">DISCOVER OUR PRODUCTS</h2>
            <p className="sub-para">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
          </div>
        </div>

        {isLoading && (
          <div className="loading" data-testid="loader">
            <BallTriangle color="#4fa94d" height={100} width={100} radius={5} />
          </div>
        )}

        {hasError && renderFailureView()}

        {!isLoading && !hasError && (
          <div className="products-list-and-filters">
            <div className="filters-group-container">
              <FiltersGroup
                ratingsList={ratingsList}
                categoryOptions={categoryOptions}
                sortbyOptions={sortbyOptions}
                searchInput={searchInput}
                changeSearchInput={setSearchInput}
                enterSearchInput={() => {}}
                changeCategory={setActiveCategoryId}
                activeCategoryId={activeCategoryId}
                changeRating={setActiveRatingId}
                activeRatingId={activeRatingId}
                clearFilters={() => {
                  setSearchInput("");
                  setActiveCategoryId("all");
                  setActiveRatingId("");
                }}
                changeSortby={setActiveSortId}
                activeSortId={activeSortId}
              />
            </div>
            <ul className="products-items-list">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <ProductItem productData={item} key={item.id} />
                ))
              ) : (
                <p className="no-products">No products found</p>
              )}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Products;
