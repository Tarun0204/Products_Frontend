import { BsSearch } from "react-icons/bs";
import { BsFilterRight } from "react-icons/bs";
import "../styles/FiltersGroup.css";

const FiltersGroup = (props) => {
  const renderRatingsFiltersList = () => {
    const { ratingsList, changeRating, activeRatingId } = props;

    return ratingsList.map((rating) => {
      const ratingClassName =
        activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`;

      const onClickRatingItem = () => changeRating(rating.ratingId);

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      );
    });
  };

  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  );

  const renderCategoriesList = () => {
    const { categoryOptions, changeCategory, activeCategoryId } = props;

    return categoryOptions.map((category) => {
      const onClickCategoryItem = () => changeCategory(category.categoryId);
      const isActive = category.categoryId === activeCategoryId;
      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`;

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      );
    });
  };

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </>
  );

  const onEnterSearchInput = (event) => {
    const { enterSearchInput } = props;
    if (event.key === "Enter") {
      enterSearchInput();
    }
  };

  const onChangeSearchInput = (event) => {
    const { changeSearchInput } = props;
    changeSearchInput(event.target.value);
  };

  const renderSearchInput = () => {
    const { searchInput } = props;
    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    );
  };

  const renderSortOptions = () => {
    const { sortbyOptions, activeSortId, changeSortby } = props;

    const onChangeSortby = (event) => {
      changeSortby(event.target.value);
    };

    return (
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <p className="sort-by">Sort by</p>
        <select
          className="sort-by-select"
          value={activeSortId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map((eachOption) => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const { clearFilters } = props;

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderSortOptions()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FiltersGroup;
