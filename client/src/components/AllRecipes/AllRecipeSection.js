import AllRecipeCard from "./AllRecipeCard"
import { useNavigate } from "react-router-dom";

export default function AllRecipeSection(){
    const navigate = useNavigate();

    const recipes = [
        {
            name: "Классические мясные фрикадельки",
            img: "img/recipe-img/img_1.jpg",
            category: "Основное",
            calories: "251",
        },
        {
            name: "Гуакамоле с орешками и томатами",
            img: "img/recipe-img/img_2.jpg",
            category: "Закуски",
            calories: "378",
        },
        {
            name: "Манная каша со свежими фруктами",
            img: "img/recipe-img/img_3.jpg",
            category: "Завтрак",
            calories: "274",
        },
        {
            name: "Овощной салат с томатами и сыром фета",
            img: "img/recipe-img/img_4.jpg",
            category: "Закуски",
            calories: "146",
        }
    ]

    const handleRecipeByIdClick = () => {
        navigate('/recipe-by-id');
    };
    

    return(
        <div className="section recipes">
            <h1 className="title">Все рецепты</h1>
            <div onClick={handleRecipeByIdClick} className="recipe-container">
                {recipes.map(recipes => <AllRecipeCard key={recipes.name} recipes={recipes}/>)}
            </div>
        </div>
    )
}