import "./Header.scss";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from "../../context/mealContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { startFetchMealsBySearch } from "../../actions/mealsActions";

const SearchForm = () => {
  const navigate = useNavigate();

  const { dispatch, meals } = useMealContext();

  const [searchTerm, setSearchTerm] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
      setSearchTerm(e.target.value);
      setErrorMessage("");
    } else {
      setSearchTerm("Invalid Search Term ...");
    }
  };

  const handleSerachResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealsBySearch(dispatch, searchTerm);
    console.log(meals);
  };

  return (
    <form
      className="search-form flex align-center"
      onSubmit={(e) => handleSerachResult(e)}
    >
      <input
        type="text"
        placeholder="Search Recipes Here..."
        className="form-control-input text-dark-gray fs-15"
        onChange={(e) => handleSearchTerm(e)}
      />
      <button
        type="submit"
        className="form-submit-btn text-white text-uppercase fs-14 flex align-center justify-center"
      >
        <BsSearch className="btn-icon" size={20} />
      </button>
    </form>
  );
};

export default SearchForm;
