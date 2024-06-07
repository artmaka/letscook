import RecipeIngredients from "../components/RecipeByID/RecipeIngridients";
import ComSec from "../components/RecipeByID/ComSec";
import RecipeSteps from "../components/RecipeByID/RecipeStep";
import RecipeHeader from "../components/RecipeByID/RecipeHeader";

export default function RecipePage(){
    return(
        <div className="page">
            <div className="content-box">
                <RecipeHeader/>
                <RecipeIngredients/>
            </div>
            <RecipeSteps/>
            <ComSec/>
        </div>
    )
}