import "./index.scss";
import { useMealContext } from "../../context/mealContext";
import CategoryList from "../../components/Category/CategoryList";
import MealsList from "../../components/Meals/MealsList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error";

const HomePage = () => {
  const { categories, meals, categoriesLoading, mealsLoading } =
    useMealContext();
  console.log(categories, meals, categoriesLoading, mealsLoading);
  return (
    <main className="main-content">
      {mealsLoading ? (
        <Loader />
      ) : meals === null ? (
        <Error />
      ) : meals.length ? (
        <MealsList meals={meals} />
      ) : (
        ""
      )}
      {categoriesLoading ? (
        <Loader />
      ) : (
        <CategoryList categories={categories} />
      )}
    </main>
  );
};

export default HomePage;
