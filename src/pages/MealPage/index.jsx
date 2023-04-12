import "./index.scss";
import { useParams } from "react-router-dom";
import { useMealContext } from "../../context/mealContext";
import { useEffect } from "react";
import { startFecthSingleMeal } from "../../actions/mealsActions";
import MealSingle from "../../components/Meals/MealSingle";
import CategoryList from "../../components/Category/CategoryList";
import Loader from "../../components/Loader/Loader";

const MealPage = () => {
  const { id } = useParams();
  console.log("meals->ID", id);

  const { categories, dispatch, meal, categoryLoading, mealLoading } =
    useMealContext();

  useEffect(() => {
    startFecthSingleMeal(dispatch, id);
  }, [id]);

  let ingredientArr = [],
    measuresArr = [],
    singleMeal = {};

  if (meal && meal?.length > 0) {
    for (let props in meal[0]) {
      if (props.includes("strIngredient")) {
        if (meal[0][props]) ingredientArr.push(meal[0][props]);
      }
      if (props.includes("strMeasure")) {
        if (meal[0][props].length > 1) {
          measuresArr.push(meal[0][props]);
        }
      }
    }
  }

  singleMeal = {
    id: meal[0]?.idMeal,
    title: meal[0]?.strMeal,
    category: meal[0]?.strCategory,
    area: meal[0]?.strArea,
    thumbnail: meal[0]?.strMealThumb,
    instructions: meal[0]?.strInstructions,
    source: meal[0]?.strSource,
    tags: meal[0]?.strTags,
    youtube: meal[0]?.strYoutube,
    ingredients: ingredientArr,
    measures: measuresArr,
  };

  console.log(ingredientArr, measuresArr);

  return (
    <div className="main-content bg-whitesmoke">
      {mealLoading ? <Loader /> : <MealSingle meal={singleMeal} />}
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </div>
  );
};

export default MealPage;
